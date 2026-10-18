'use strict';

angular.module('mainApp.contactlyle_success', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contactlyle_success', {
    templateUrl: 'views/contactlyle/contactlyle_success.html',
    controller: 'ContactLyleSuccessCtrl'
  });
}])

.controller('ContactLyleSuccessCtrl', ['$rootScope', function($rootScope) {
  $rootScope.main_header = false;
}]);