'use strict';

angular.module('mainApp.gallery_show', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/gallery_show', {
            templateUrl: 'views/gallery/gallery_show.html',
            controller: 'GalleryShowCtrl'
        });
    }])

    .controller('GalleryShowCtrl', ['$scope', '$routeParams', '$sce', '$document', 'galleries',
        function ($scope, $routeParams, $sce, $document, galleries) {

            // find the selected gallery in galleries
            galleries.forEach(function (gallery) {
                if (gallery.id == $routeParams.id) {
                    $scope.gallery = gallery;
                }
            });

            $scope.trustHtml = function(htmlValue) {
                return $sce.trustAsHtml(htmlValue);
            };

            // photo viewer; viewerIndex is null while the viewer is closed
            var body = $document.find('body');
            $scope.viewerIndex = null;

            $scope.openViewer = function (index) {
                $scope.viewerIndex = index;
                body.addClass('viewer-open');
            };
            $scope.closeViewer = function () {
                $scope.viewerIndex = null;
                body.removeClass('viewer-open');
            };
            $scope.step = function (delta) {
                var count = $scope.gallery.photos.length;
                $scope.viewerIndex = ($scope.viewerIndex + delta + count) % count;
            };
            $scope.currentPhoto = function () {
                return $scope.gallery.photos[$scope.viewerIndex];
            };

            // keyboard controls while the viewer is open
            var onKeydown = function (event) {
                if ($scope.viewerIndex === null) {
                    return;
                }
                var keys = {Escape: $scope.closeViewer, ArrowLeft: function () { $scope.step(-1); },
                    ArrowRight: function () { $scope.step(1); }};
                if (keys[event.key]) {
                    event.preventDefault();
                    $scope.$apply(keys[event.key]);
                }
            };
            $document.on('keydown', onKeydown);

            $scope.$on('$destroy', function () {
                $document.off('keydown', onKeydown);
                body.removeClass('viewer-open');
            });

        }])

    // calls on-swipe-left / on-swipe-right for a horizontal touch swipe
    .directive('photoSwipe', [function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var startX = null, startY = null;
                element.on('touchstart', function (event) {
                    var touch = event.touches[0];
                    startX = touch.clientX;
                    startY = touch.clientY;
                });
                element.on('touchend', function (event) {
                    if (startX === null) {
                        return;
                    }
                    var touch = event.changedTouches[0];
                    var dx = touch.clientX - startX, dy = touch.clientY - startY;
                    startX = null;
                    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
                        scope.$apply(dx < 0 ? attrs.onSwipeLeft : attrs.onSwipeRight);
                    }
                });
            }
        };
    }]);
