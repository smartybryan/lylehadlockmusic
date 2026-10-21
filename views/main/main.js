'use strict';

angular.module('mainApp.main', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/main', {
            templateUrl: 'views/main/main.html',
            controller: 'MainCtrl'
        });
    }])
    .controller('MainCtrl', ['$scope', '$document', 'cd_data', function ($scope, $document, cd_data) {
        $scope.cd_data = cd_data;

        // in-page scroll; a plain #albums href would be treated as a route change
        $scope.scrollToAlbums = function () {
            var albums = $document[0].getElementById('albums');
            if (albums) {
                albums.scrollIntoView({behavior: 'smooth'});
            }
        };
    }]);
