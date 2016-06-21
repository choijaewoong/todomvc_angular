angular.module('todomvc').
  directive('todoItem', function(){
    return{
      scope:{
        data: '=',
        onRemove:'&'
      },
      link: function(scope){
        scope.remove = function(todoId){
          console.log(todoId);
          scope.onRemove({todoId: todoId});
        }
      },
      template:
      '<div class="input-group">' +
        '<span class="input-group-addon">' +
          '<input type="checkbox" ng-model="data.completed">' +
        '</span>' +
        '<input type="text" class="form-control" ng-model="data.title">' +
        '<span class="input-group-btn">' +
          '<button class="btn btn-danger" ng-click="remove(data.id)">remove</button>' +
        '</span>' +
      '</div>'
    };
  });
