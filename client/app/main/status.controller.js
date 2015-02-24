'use strict';

angular.module('greenhouseApp')
  .controller('StatusCtrl', function ($scope, $http, socket) {
    $scope.currentStatus = [];

    $http.get('/api/things/status').success(function(status) {
      $scope.currentStatus = status;
      socket.syncUpdates('thing', $scope.currentStatus);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
