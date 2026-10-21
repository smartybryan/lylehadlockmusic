'use strict';

angular.module('mainApp.contactlyle', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contactlyle', {
    templateUrl: 'views/contactlyle/contactlyle.html',
    controller: 'ContactLyleCtrl'
  });
}])

.controller('ContactLyleCtrl', [function() {
}]);