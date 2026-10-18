'use strict';

angular.module('mainApp.mothersday_delivery', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mothersday_delivery', {
    templateUrl: 'views/mothersday/mothersday_delivery.html',
    controller: 'MothersDayDelCtrl'
  });
}])

.controller('MothersDayDelCtrl', ['$rootScope', function($rootScope) {
  $rootScope.main_header = false;
}]);