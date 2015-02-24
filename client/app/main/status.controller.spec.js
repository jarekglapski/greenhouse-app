'use strict';

describe('Controller: StatusCtrl', function () {

  // load the controller's module
  beforeEach(module('greenhouseApp'));
  beforeEach(module('socketMock'));

  var StatusCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/things/status')
      .respond(['1', '2', '3', '4']);

    scope = $rootScope.$new();
    StatusCtrl = $controller('StatusCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of things to the scope', function () {
    $httpBackend.flush();
    expect(scope.currentStatus.length).toBe(4);
  });
});
