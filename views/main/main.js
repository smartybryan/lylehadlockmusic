'use strict';

angular.module('mainApp.main', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/main', {
            templateUrl: 'views/main/main.html',
            controller: 'MainCtrl'
        });
    }])
    .controller('MainCtrl', ['$rootScope', '$scope', 'cd_data', function ($rootScope, $scope, cd_data) {
        $rootScope.main_header = true;
        $scope.cd_data = cd_data;
    }]);
