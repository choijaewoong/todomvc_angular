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
});
