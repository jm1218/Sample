'use strict';
define([], function () {
    angular.module('app').directive('ngBack', function () {
        return {
            restrict: 'A',
            link: function ($rootScope, $element, $attrs) {
                $element.bind('click', function () {
                    history.back();
                    $rootScope.$apply();
                });
            }
        }
    });
});