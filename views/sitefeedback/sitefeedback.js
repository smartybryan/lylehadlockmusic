'use strict';

angular.module('mainApp.sitefeedback', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sitefeedback', {
    templateUrl: 'views/sitefeedback/sitefeedback.html',
    controller: 'SitefeedbackCtrl'
  });
}])

.controller('SitefeedbackCtrl', [function() {
}]);