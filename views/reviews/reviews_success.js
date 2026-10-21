'use strict';

angular.module('mainApp.reviews_success', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/reviews_success', {
            templateUrl: 'views/reviews/reviews_success.html',
            controller: 'ReviewsSuccessCtrl'
        });
    }])

    .controller('ReviewsSuccessCtrl', ['$scope', function ($scope) {

    }]);