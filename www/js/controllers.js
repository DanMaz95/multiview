angular.module('starter.controllers', [])

.controller('TodoCtrl', function($scope) {
    
        $scope.todos = [
        {text:'Learn to fly', done:false},         
        {text: 'Get a Waffle', done:false}
      
    ];
  
    $scope.total = function () {
        return $scope.todos.length;
      
    };
  
  
    $scope.add = function () {
        $scope.todos.push({text:$scope.formTodoText, done:false});
        $scope.formTodoText = '';
      
    };
  
    $scope.clear = function () {
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
            
        });
    };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

//.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//  $scope.chat = Chats.get($stateParams.chatId);
//})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
