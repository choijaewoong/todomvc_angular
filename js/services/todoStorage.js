angular.module('todomvc')
  .factory('todoStorage', function(){
    var storage = {
      todos: [{
        id:1,
        title: '청소하기',
        completed: true
      },{
        id:2,
        title: '코드랩',
        completed: false
      },{
        id:3,
        title: '귀가',
        completed: false
      }],

      get: function(){
        return storage.todos;
      },

      post: function(newTodoTitle){
        // create id
        var newId = storage.todos.length === 0 ?
            1 : storage.todos[storage.todos.length-1].id + 1;
        // todo object 생성
        var newTodo = {
          id: newId,
          title: newTodoTitle,
          completed: false
        }
        // todos 배열에 todo 추가
        storage.todos.push(newTodo);
      },

      delete: function(todoId){
        // find index
        var findIndex = storage.todos.findIndex(function(todo){
          return todo.id === todoId;
        });
        // remove from array
        if(findIndex > -1){
          storage.todos.splice(findIndex, 1);
        }
      },

      clearCompleted: function(){
        //incompleted
        // var incompletedTodos = storage.todos.filter(function(todo){
        //   return todo.completed === false;
        // });
        // storage.todos = incompletedTodos;
        for (i=0; i < storage.todos.length; i++) {
          if(storage.todos[i].completed === true){
            storage.todos.splice(i, 1);
          }
        }
      }
    };
    return storage;
  });
