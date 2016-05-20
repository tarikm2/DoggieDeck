angular.module('starter.controllers', [])

.controller('DeckCtrl', function($scope, Dogs) {
  //function for generating chunks of dogs for grid view
  var chunk = function(arr, size) {
     var newArr = [];
      for (var i=0; i<arr.length; i+=size) {
        if (arr.length - i >= 3) {
          newArr.push(arr.slice(i, i + size));
        } else {
          newArr.push(arr.slice(i, i + size));
          while (newArr[newArr.length - 1].length < 3) {
            newArr[newArr.length - 1].push({id: -1, name: ""});
          }
        }
      }

   return newArr;
  };

  $scope.dogGroups = chunk(Dogs.all(), 3);

  //add removing function onto scope from factory
  $scope.remove = function(dog) {
    Dogs.remove(dog);
  };

})

.controller('ChatCtrl', function($scope, Chats) {
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

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('CameraCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller("FeedCtrl", function($scope, Feed){
  $scope.feed = Feed.all();

})

.controller('MyDogsCtrl', function($scope){})

.controller('AccountCtrl', function($scope){});
