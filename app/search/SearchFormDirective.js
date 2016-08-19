/**
 * @ngdoc flightSearch
 * @name flightSearch.directive:searchForm
 * @description Search Form Directive
*/

(function() {
  'use strict';

  angular.module('flightSearch')
    .directive('searchForm', [
      '$compile',
      '$state',
      searchForm
    ]);

  function searchForm($compile, $state) {
  	return {
  		restrict: 'E',
      templateUrl: 'views/searchFormView.html',
      scope: {
        position: '@',
        origin: '@',
        search: '=',
        airports: '='
      },
  		link: link
  	};

    function link(scope, elements, attrs) {
      console.log('--- Search Form Directive Loaded ---');

      if(!scope.search.origin) {
        scope.search = [];
        scope.search.origin = scope.origin;
        //scope.search.destination = 'CUN - Cancun International Airport'; //TESTING
        scope.search.departDate = new Date();
        scope.search.returnDate = new Date();
        scope.search.flightType = 'return';
        scope.search.passengers = 1;
        scope.search.error = false;

        if(scope.origin) {
          changeBackground(scope.origin);
        }
      }

      scope.codes = [];
      scope.changeBackground = changeBackground;
      scope.toggleFlightType = toggleFlightType;
      scope.processSearch = processSearch;
      formatValues();

      function formatValues() {
        angular.forEach(scope.airports, function(value) {
          scope.codes.push(value.code + ' - ' + value.name);
        });
      }

      function changeBackground(code) {
        if(scope.search.destination) {
          code = scope.search.destination.substring(0, 3);
        } else if(scope.search.origin) {
          code = scope.search.origin.substring(0, 3);
        }

        if(code && code.length === 3) {
          var hero = document.getElementById('landingSearch');
          angular.element(hero).css('background-image', 'url(/assets/images/' + code + '.jpg)');
        }
      }

      function toggleFlightType($event, type) {
        $event.preventDefault();
        scope.search.flightType = type;
      }

      function processSearch() {
        //doing a very simplistic form check and redirect as it's a demo (would not normally be the acceptable functionality).
        if(scope.search.origin && scope.search.destination && scope.search.departDate && scope.search.passengers) {
          $state.go('search', {'query': scope.search, 'airports': scope.airports });
        } else {
          scope.search.error = true;
        }
      }
    }
  }

}());
