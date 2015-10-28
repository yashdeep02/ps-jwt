'use strict';

/**
 * @ngdoc function
 * @name psJwtApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the psJwtApp
 */
angular.module('psJwtApp')
    .controller('HeaderCtrl', function ($scope, $auth) {
        $scope.isAuthenticated = $auth.isAuthenticated;
    });
