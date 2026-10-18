'use strict';

angular.module('mainApp.sheetmusic', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sheetmusic', {
    templateUrl: 'views/sheetmusic/sheetmusic.html',
    controller: 'SheetmusicCtrl'
  });
}])

.controller('SheetmusicCtrl', ['$rootScope', function($rootScope) {
  $rootScope.main_header = false;
}]);