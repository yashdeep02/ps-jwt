'use strict';

/**
 * @ngdoc service
 * @name psJwtApp.authToken
 * @description
 * # authToken
 * Factory in the psJwtApp.
 */
angular
  .module('psJwtApp')
  .factory('authToken', function () {
    var storage = $window.localStorage;
    return {
      setToken: function (token) {

      }
    };
  });
