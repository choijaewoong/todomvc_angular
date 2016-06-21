// 컨트롤러 선언
angular.module('todomvc')
  .controller('TodomvcCtrl', function($scope, todoStorage){

  $scope.todos = todoStorage.get();

  // 필터 변수 추가
  $scope.filter = {};

  $scope.add = function(newTodoTitle){
    // console.log('add() newTodoTitle:' , newTodoTitle);
    newTodoTitle = newTodoTitle.trim();
    if(!newTodoTitle) return;

    todoStorage.post(newTodoTitle);
    $scope.newTodoTitle = "";

  }
  $scope.remove = function(todoId){
    // console.log('remove() todoId : ' , todoId);
    todoStorage.delete(todoId);

  }

  $scope.clearCompleted= function(){
    // for (i=0; i < $scope.todos.length; i++) {
    //   if($scope.todos[i].completed === true){
    //     $scope.todos.splice(i, 1);
    //   }
    // }
    todoStorage.clearCompleted();
  }
});
