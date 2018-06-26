var myapp = angular.module('myapp', []);

myapp.controller('TodoListController', function() {
    var todoList = this;
    todoList.showName = "vishal";
    todoList.todos = [
      {firstName:'vishal', lastName:"kumar", emailId:"vishal@gmail.com",
        phoneNumber: "9028523644", is_active:true},
      {firstName:'vishal2', lastName:"kumar2", emailId:"vishal@gmail.com",
        phoneNumber: "9028523644", is_active:true}];

    todoList.addAppKey = function() {
      todoList.todos.push({firstName:todoList.firstName, lastName:todoList.lastName,
       emailId:todoList.emailId, phoneNumber: todoList.phoneNumber, is_active:true});
      todoList.firstName = '';
      todoList.lastName = '';
      todoList.emailId = '';
      todoList.phoneNumber = '';
    };

    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.is_active) todoList.todos.push(todo);
      });
    };

    //
    todoList.newField = {};
    todoList.editing = false;

    todoList.editAppKey = function(field) {
        todoList.editing = todoList.todos.indexOf(field);
        todoList.newField = angular.copy(field);
    }

    todoList.saveField = function(index) {
        if (todoList.editing !== false) {
            todoList.todos[todoList.editing] = todoList.newField;
            todoList.editing = false;
        }       
    };
    
    todoList.cancel = function(index) {
        if (todoList.editing !== false) {
            todoList.todos[todoList.editing] = todoList.newField;
            todoList.editing = false;
        }       
    };

  });