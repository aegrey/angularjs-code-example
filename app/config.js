/**
 * @ngdoc flightSearch
 * @name flightSearch.factory:Config
 * @description Configuration variables
*/

(function() {
  'use strict';

  angular.module('flightSearch')
    .constant('Config', configVars);

  var configVars = {
    apiUrl: 'json/flight-data.json',
    siteName: 'Flight Seach',
    siteDesc: 'A code exercise to create a UI for a flight search module for skill assessment.',
    siteUrl: 'https://github.com/aegrey/flight-search'
  };

}());
