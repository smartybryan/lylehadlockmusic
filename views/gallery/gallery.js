'use strict';

angular.module('mainApp.gallery', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gallery', {
    templateUrl: 'views/gallery/gallery.html',
    controller: 'GalleryCtrl'
  });
}])

.controller('GalleryCtrl', ['$scope','galleries', function($scope,galleries) {
  $scope.galleries = galleries;
}]);