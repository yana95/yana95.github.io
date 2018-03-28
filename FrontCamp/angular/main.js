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
            title: 'Article 1',
            content: 'Protests after Russian shopping mall fire leaves 41 children dead',
            date: new Date(2018, 2, 20),
            id: 1,
        },
    ];
    return {
        getTodos: () => {
            return todos;
        },
        addTask: (task) => {
            todos.push(task);
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
    }
});

app.controller('todosController', ['$scope', '$location', 'todoFactory', function ($scope, $location, todoFactory) {
    $scope.setEditId = (task) => {
        console.log(task);
        todoFactory.setEditId(task.id);
        $location.path('/todos/edit');
    };
    $scope.onAddClick = () => {
        $location.path('/todos/add');
    };
    $scope.todo = todoFactory.getTodos();
}]);

app.controller('addController', ['$scope', '$location', 'todoFactory', function ($scope, $location, todoFactory) {
    const date = new Date();
    $scope.task = {
        title: '',
        done: false,
        date: date,
        id: date.getMilliseconds(),
    };
    $scope.backClick = () => {
        $location.path('/todos');
    };
    $scope.saveTask = () => {
        todoFactory.addTask($scope.task);
        $scope.todo = todoFactory.getTodos().filter((item) => (item.done === false));
        $scope.ready = todoFactory.getTodos().filter((item) => (item.done === true));
        $location.path('/todos');
    };
}]);

app.controller('editController', ['$scope', '$location', 'todoFactory', function ($scope, $location, todoFactory) {
    const editID = todoFactory.getEditId();
    todoFactory.getTodos().map((item,i) => {
        if(editID == item.id){
            $scope.task = item;
        }
    });
    console.log($scope.task);
    $scope.backClick = () => {
        $location.path('/todos');
    };
    $scope.saveTask = () => {
        todoFactory.editTask($scope.task);
        $location.path('/todos');
    }
}]);

app.component('taskForm', {
    templateUrl: 'taskForm.html',
    bindings: {
        task: '=',
        saveTask: '&',
        backClick: '&',
    }
});

app.component('list', {
    templateUrl: 'list.html',
    bindings: {
        tasks: '=',
        edit: '&',
    }
});

app.directive('controlNameLength', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attr, ctrl) {
            function customValidator(ngModelValue) {
                ctrl.$setValidity('lengthValidator', ngModelValue.length >= 20);
                return ngModelValue;
            }

            ctrl.$parsers.push(customValidator);
        }

    };
});