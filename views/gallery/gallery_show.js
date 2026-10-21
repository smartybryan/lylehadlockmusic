'use strict';

angular.module('mainApp.gallery_show', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/gallery_show', {
            templateUrl: 'views/gallery/gallery_show.html',
            controller: 'GalleryShowCtrl'
        });
    }])

    .controller('GalleryShowCtrl', ['$scope', '$routeParams', '$sce', 'galleries',
        function ($scope, $routeParams, $sce, galleries) {

            // find the selected gallery in galleries
            galleries.forEach(function (gallery) {
                if (gallery.id == $routeParams.id) {
                    $scope.gallery = gallery;
                }
            });

            $scope.trustHtml = function(htmlValue) {
                return $sce.trustAsHtml(htmlValue);
            }

        }]);