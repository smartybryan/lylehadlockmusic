'use strict';

angular.module('mainApp.mothersday', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mothersday', {
    templateUrl: 'views/mothersday/mothersday.html',
    controller: 'MothersDayCtrl'
  });
}])

.controller('MothersDayCtrl', ['$rootScope', function($rootScope) {
  $rootScope.main_header = false;
}]);