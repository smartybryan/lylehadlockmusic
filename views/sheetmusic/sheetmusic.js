'use strict';

angular.module('mainApp.sheetmusic', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sheetmusic', {
    templateUrl: 'views/sheetmusic/sheetmusic.html',
    controller: 'SheetmusicCtrl'
  });
}])

.controller('SheetmusicCtrl', [function() {
}]);