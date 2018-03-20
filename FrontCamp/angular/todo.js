const app = angular.module('toDoApp', []);

app.factory('todoFactory', () => {
    const todos = [
        {
            title: 'My mock task',
            done: false,
            date: new Date(2013, 12, 1),
            id: 1,
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
        addTodo: (todo) => {
            return todos.push(todo);
        },
        changeStatus: (id) => {
            todos.map((item,i) => {
                if(item.id == id){
                    todos[i].done = !todos[i].done;
                    return;
                }
            })
            console.log(todos);
        },
        delete: (id) => {
            todos.map((item,i) => {
                if(item.id == id){
                    todos.splice(i,1);
                }
            })
        }
    }
});

app.controller('toDoController', ['$scope', 'todoFactory', ($scope, todoFactory) => {
    $scope.tasks = todoFactory.getTodos();
    $scope.addNewTask = () => {
        const date = new Date();
        const newTask = {
            title: $scope.newTaskName,
            done: false,
            date: date,
            id: date.getMilliseconds(),
        };
        $scope.tasks.push(newTask);
        $scope.newTaskName = '';
    };
    $scope.changeStatus = (id) => {
        $scope.tasks.map((item,i) => {
            if(item.id == id){
                $scope.tasks[i].done = !$scope.tasks[i].done;
                return;
            }
        })
    };
    $scope.delete = (id) => {
        todoFactory.delete(id);
    }
}]);