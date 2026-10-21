'use strict';

angular.module('mainApp.reviews_submit', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/reviews_submit', {
            templateUrl: 'views/reviews/reviews_submit.html',
            controller: 'ReviewsSubmitCtrl'
        });
    }])

    .controller('ReviewsSubmitCtrl', ['$scope', function ($scope) {

    }]);