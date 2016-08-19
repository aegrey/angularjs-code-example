/**
 * @ngdoc flightSearch
 * @name flightSearch.factory:SearchController
 * @description App Controller
*/

(function() {
  'use strict';

  angular.module('flightSearch')
  .factory('SearchService', [
    '$http',
    'Config',
    SearchService
  ]);

  function SearchService($http, Config) {

    var service = {
      getAirports: getAirports,
      getResults: getResults,
      getDetails: getDetails
    };

    return service;

    /* API CALL: getAirports */
    function getAirports() {

      var config = {
        method: 'GET',
        url: '/assets/json/airports.json',
        data: {
          authKey: 'RetrievedKeyFromAPICallToAuthorizeConnection'
        }};

      function successCallback(response) {
        return response;
      }

      function errorCallback(message, status, headers) {
        var error = {
          error: true,
          message: message,
          status: status,
          headers: headers
        };
        return error;
      }

      return $http(config)
        .then(successCallback, errorCallback);
    }

    /* API CALL: getResults */
    function getResults(query, offset, length) {

      var config = {
        method: 'GET',
        url: '/assets/json/results.json',
        data: {
          authKey: 'RetrievedKeyFromAPICallToAuthorizeConnection',
          query: query,
          offset: offset,
          length: length
        }};

      function successCallback(response) {
        return response;
      }

      function errorCallback(message, status, headers) {
        var error = {
          error: true,
          message: message,
          status: status,
          headers: headers
        };
        return error;
      }

      return $http(config)
        .then(successCallback, errorCallback);
    }

    /* API CALL: getDetails */
    function getDetails(recordID) {

      var config = {
        method: 'GET',
        url: '/assets/json/details.json',
        data: {
          authKey: 'RetrievedKeyFromAPICallToAuthorizeConnection',
          recordID: recordID
        }};

      function successCallback(response) {
        return response;
      }

      function errorCallback(message, status, headers) {
        var error = {
          error: true,
          message: message,
          status: status,
          headers: headers
        };
        return error;
      }

      return $http(config)
        .then(successCallback, errorCallback);
    }
  }

})();
