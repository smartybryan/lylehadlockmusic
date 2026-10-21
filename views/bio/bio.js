'use strict';

angular.module('mainApp.bio', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bio', {
    templateUrl: 'views/bio/bio.html',
    controller: 'BioCtrl'
  });
}])

.controller('BioCtrl', [function() {
}]);