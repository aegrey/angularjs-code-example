/**
 * @ngdoc flightSearch
 * @name flightSearch.controller:LandingController
 * @description Landing page with simple search
*/

(function() {
  'use strict';

  angular.module('flightSearch')
  .controller('LandingController', [
    '$scope',
    'airportPrep',
    LandingController
  ]);

  function LandingController($scope, airportPrep) {
    console.log('--- Landing Loaded ---');

    var landing = this;
    landing.title = "Search for Flights";
    landing.airports = airportPrep.data;
    landing.origin = getOrigin();

    /**
    * @function getOrigin
    * @returns origin: string
    * @description Retrieves users location or set default origin
    */
    function getOrigin() {
      /*
      | -- DEV NOTE --
      | Functionality omitted
      | Acquring users location and setting Airport to closest location. Setting only two locations for simplicity.
      */
      var origin = 'ATL - Atlanta Hartsfield Jackson International Airport';
      return origin;
    }
  }
})();
