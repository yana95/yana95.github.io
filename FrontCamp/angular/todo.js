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
            title: '20.03.2018',
            done: false,
            date: new Date(2018, 2, 20),
            id: 1,
        },
        {
            title: '10.03.2018',
            done: false,
            date: new Date(2018, 2, 10),
            id: 3,
        },
        {
            title: 'My done task',
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
        }
    }
});

app.controller('todosController', ['$scope', 'todoFactory', function ($scope, todoFactory) {
    $scope.todo = todoFactory.getTodos().filter((item) => (item.done === false));
    $scope.ready = todoFactory.getTodos().filter((item) => (item.done === true));
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