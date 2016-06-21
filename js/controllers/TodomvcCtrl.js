// 컨트롤러 선언
angular.module('todomvc')
  .controller('TodomvcCtrl', function($scope){
    $scope.todos = [{
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
    }
  ];

  // 필터 변수 추가
  $scope.filter = {};

  $scope.add = function(newTodoTitle){
    // console.log('add() newTodoTitle:' , newTodoTitle);
    newTodoTitle = newTodoTitle.trim();
    if(!newTodoTitle) return;
    // create id
    var newId = $scope.todos.length === 0 ?
        1 : $scope.todos[$scope.todos.length-1].id + 1;
    // todo object 생성
    var newTodo = {
      id: newId,
      title: newTodoTitle,
      completed: false
    }
    // todos 배열에 todo 추가
    $scope.todos.push(newTodo);
    $scope.newTodoTitle = "";

  }
  $scope.remove = function(todoId){
    // console.log('remove() todoId : ' , todoId);
    // find index
    var findIndex = $scope.todos.findIndex(function(todo){
      return todo.id === todoId;
    });
    // remove from array
    if(findIndex > -1){
      $scope.todos.splice(findIndex, 1);
    }
  }

  $scope.clearCompleted= function(){
    // for (i=0; i < $scope.todos.length; i++) {
    //   if($scope.todos[i].completed === true){
    //     $scope.todos.splice(i, 1);
    //   }
    // }
    //incompleted
    var incompletedTodos = $scope.todos.filter(function(todo){
      return todo.completed === false;
    });
    $scope.todos = incompletedTodos;
  }
});
