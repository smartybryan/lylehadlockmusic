'use strict';

angular.module('mainApp.links', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/links', {
    templateUrl: 'views/links/links.html',
    controller: 'LinksCtrl'
  });
}])

.controller('LinksCtrl', [function() {
}]);