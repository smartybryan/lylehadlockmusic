'use strict';

angular.module('mainApp.gallery', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gallery', {
    templateUrl: 'views/gallery/gallery.html',
    controller: 'GalleryCtrl'
  });
}])

.controller('GalleryCtrl', ['$rootScope','$scope','galleries', function($rootScope,$scope,galleries) {
  $rootScope.main_header = false;
  $scope.galleries = galleries;
}]);