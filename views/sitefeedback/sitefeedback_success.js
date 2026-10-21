'use strict';

angular.module('mainApp.sitefeedback_success', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sitefeedback_success', {
    templateUrl: 'views/sitefeedback/sitefeedback_success.html',
    controller: 'SitefeedbackSuccessCtrl'
  });
}])

.controller('SitefeedbackSuccessCtrl', [function() {
}]);