'use strict';

angular.module('mainApp.sitefeedback', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sitefeedback', {
    templateUrl: 'views/sitefeedback/sitefeedback.html',
    controller: 'SitefeedbackCtrl'
  });
}])

.controller('SitefeedbackCtrl', ['$rootScope', function($rootScope) {
  $rootScope.main_header = false;
}]);