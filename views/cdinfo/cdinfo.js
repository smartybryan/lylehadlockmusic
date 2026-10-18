'use strict';

angular.module('mainApp.cdinfo', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/cdinfo', {
            templateUrl: 'views/cdinfo/cdinfo.html',
            controller: 'CdinfoCtrl'
        });
    }])

    .controller('CdinfoCtrl', ['$rootScope', '$scope', '$routeParams', '$sce', 'cd_data',
        function ($rootScope, $scope, $routeParams, $sce, cd_data) {
            $rootScope.main_header = false;

            // find the selected cd in cd_data
            cd_data.forEach(function (cd) {
                if (cd.id == $routeParams.id) {
                    $scope.cd = cd;
                }
            });

            $scope.trustHtml = function(htmlValue) {
                return $sce.trustAsHtml(htmlValue);
            };

            // audio controls
            var audio = null;
            $scope.track_playing = 0;
            $scope.play = function (url, track_number) {
                $scope.stop();
                audio = new Audio(url);
                audio.play();
                $scope.trackPlaying = track_number;
            };
            $scope.stop = function () {
                if (audio) {
                    audio.pause();
                    audio = null;
                    $scope.trackPlaying = 0;
                }
            };
            // handler to stop playing when leaving the page
            $scope.$on('$destroy', function() {
                $scope.stop();
            })

        }]);

