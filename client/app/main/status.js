'use strict';

angular.module('greenhouseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/status.html',
        controller: 'StatusCtrl'
      });
  });
