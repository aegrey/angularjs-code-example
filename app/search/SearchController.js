/**
 * @ngdoc flightSearch
 * @name flightSearch.controller:SearchController
 * @description App Controller
*/

(function() {
  'use strict';

  angular.module('flightSearch')
  .controller('SearchController', [
    '$scope',
    '$state',
    '$stateParams',
    'SearchService',
    SearchController
  ]);

  function SearchController($scope, $state, $stateParams, SearchService) {
    console.log('--- Search Loaded ---');

    var search = this;
    search.searchQuery = $stateParams.query;
    search.airports = $stateParams.airports;


  }

})();
