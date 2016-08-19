/**
 * @ngdoc flightSearch
 * @name flightSearch.module:flightSearch
 * @description Initiating Application & Routing
*/

(function() {
  'use strict';

  //INITIATE APP & INJECTIONS

  angular.module('flightSearch', [
    'ui.router',
    'ngAnimate',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    Route
  ]);

  function Route($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('landing', {
        url: '/',
        templateUrl: 'views/landingView.html',
        controller: 'LandingController',
        controllerAs: 'landing',
        resolve: {
            airportPrep: function(SearchService) {
              return SearchService.getAirports();
            }
        }
      })

      .state('search', {
        templateUrl: 'views/searchResultsView.html',
        controller: 'SearchController',
        controllerAs: 'search',
        params: {
          'query': {},
          'airports': []
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
