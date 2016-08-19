/**
 * @ngdoc flightSearch
 * @name flightSearch.controller:MainController
 * @description Main controller - houses data for UI elements header & footer, as well as global functionality.
*/

(function() {
  'use strict';

  angular.module('flightSearch')
  .controller('MainController', [
    '$scope',
    '$window',
    MainController
  ]);

  function MainController($scope, $window) {
    console.log('--- App Loaded ---');
    var main = this;

  }

})();
