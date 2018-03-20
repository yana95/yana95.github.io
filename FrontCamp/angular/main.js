const app = angular.module('toDoApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/todos', {
            templateUrl: 'todos.html',
            controller: 'todosController'
        })
        .when('/todos/add', {
            templateUrl: 'add.html',
            controller: 'addController'
        })
        .when('/todos/edit', {
            templateUrl: 'edit.html',
            controller: 'editController'
        })
        .otherwise({
            redirectTo: '/todos'
        });
});

app.factory('todoFactory', () => {
    let editTaskID;
    const todos = [
        {
            title: 'A task',
            done: false,
            date: new Date(2018, 2, 20),
            id: 1,
        },
        {
            title: 'B task',
            done: false,
            date: new Date(2018, 2, 10),
            id: 3,
        },
        {
            title: 'C task',
            done: true,
            date: new Date(2017, 6, 4),
            id: 2,
        }
    ];
    return {
        getTodos: () => {
            return todos;
        },
        addTask: (task) => {
            todos.push(task);
        },
        changeStatus: (task) => {
            todos.map((item, i) => {
                if(item.id === task.id){
                    todos[i].done = !todos[i].done;
                }
            });
        },
        getEditId: () => {
            return editTaskID;
        },
        setEditId: (id) => {
            editTaskID = id;
        },
        editTask: (task) => {
            for(let i=0; i<todos.length; i++){
                if(todos[i].id === editTaskID){
                    todos[i] = task;
                }
            }
        },
        getLetterSortItems: () => {
            const todo =  todos.filter((item) => (item.done === false));
            const compare = (a, b) => {
                if ( a.title < b.title) {
                    return -1;
                }
                if (a.title > b.title) {
                    return 1;
                }
                return 0;
            };
            return todo.sort(compare);
        },
        getDateSortItems: () => {
            const todo =  todos.filter((item) => (item.done === false));
            const compare = (a, b) => {
                if ( a.date < b.date) {
                    return -1;
                }
                if (a.date > b.date) {
                    return 1;
                }
                return 0;
            };
            return todo.sort(compare);
        }
    }
});

app.controller('todosController', ['$scope', 'todoFactory', function ($scope, todoFactory) {
    $scope.setEditId = (task) => {
        todoFactory.setEditId(task.id);
    }
    $scope.changeStatus = (task) => {
        todoFactory.changeStatus(task);
        $scope.todo = todoFactory.getTodos().filter((item) => (item.done === false));
        $scope.ready = todoFactory.getTodos().filter((item) => (item.done === true));
    }
    $scope.ageFilter = () => {
        $scope.todo = todoFactory.getTodos().filter((item) => (item.done === false));
        if($scope.age){
            const now = new Date();
            $scope.todo = $scope.todo.filter((item) => {
                const timeDiff = Math.abs(now.getTime() - item.date.getTime());
                const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                return diffDays === $scope.age;
            })
        }
    }
    $scope.sort = () => {
        if($scope.sortType === 'letter'){
            $scope.todo = todoFactory.getLetterSortItems();
        } else {
            $scope.todo = todoFactory.getDateSortItems();
        }
    }
    $scope.sortType = 'letter';
    $scope.sort();
    $scope.ready = todoFactory.getTodos().filter((item) => (item.done === true));
}]);

app.controller('addController', ['$scope', '$location', 'todoFactory', function ($scope, $location, todoFactory) {
    const date = new Date();
    $scope.task = {
        title: '',
        done: false,
        date: date,
        id: date.getMilliseconds(),
    };
    $scope.saveTask = () => {
        todoFactory.addTask($scope.task);
        $scope.todo = todoFactory.getTodos().filter((item) => (item.done === false));
        $scope.ready = todoFactory.getTodos().filter((item) => (item.done === true));
        $location.path('#/todos');
    };
}]);

app.controller('editController', ['$scope', '$location', 'todoFactory', function ($scope, $location, todoFactory) {
    const editID = todoFactory.getEditId();
    todoFactory.getTodos().map((item,i) => {
        if(editID == item.id){
            $scope.task = item;
        }
    });
    $scope.saveTask = () => {
        todoFactory.editTask($scope.task);
        $location.path('#/todos/add');
    }
}]);

app.component('taskForm', {
    templateUrl: 'taskForm.html',
    bindings: {
        task: '=',
        saveTask: '&',
    }
});