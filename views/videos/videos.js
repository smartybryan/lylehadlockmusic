'use strict';

angular.module('mainApp.videos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/videos', {
    templateUrl: 'views/videos/videos.html',
    controller: 'VideosCtrl'
  });
}])

.controller('VideosCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {
  $rootScope.main_header = false;

  $scope.videos = [
    {
      "url": "https://www.youtube.com/embed/obm1pjlklOg?rel=0",
      "description": "Footage obtained from 'Finding Faith in Christ' and 'The Lamb of God' produced by The Church of Jesus Christ of Latter-Day Saints. Music is from Lyle Hadlock's, 'We Ever Pray For Thee'."
    },
    {
      "url": "https://www.youtube.com/embed/998ms0difsc?rel=0",
      "description": "We caught up with Lyle one evening after work and had him play some impromptu music for us. This is some of the music that was in his head that night reflecting the True Meaning of Christmas. In this video: Away in a Manger, Do You Hear What I Hear?, Hark the Herald Angels Sing, What Child is This?"
    },
    {
      "url": "https://www.youtube.com/embed/YTl7xDwiaFE?rel=0",
      "description": "The True Meaning of Christmas Part II. In this video: Coventry Carol, O Holy Night, What Child is This?"
    },
    {
      "url": "https://www.youtube.com/embed/G2xt0F85_ZI?rel=0",
      "description": "Ragtime style Christmas tunes Lyle played for us duing an impromptu visit."
    }
  ]
}])
.filter('trusted', ['$sce', function ($sce) {
    return $sce.trustAsResourceUrl;
}]);
