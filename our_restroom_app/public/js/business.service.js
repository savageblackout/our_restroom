(function() {
  "use strict";

  angular.module("our").factory("businessService", businessService);

  businessService.$inject = ["$log", "$http"];

  function businessService($log, $http) {
    $log.info("business service loaded!");

    var service = {
      create: create,
      businesses: []
    };

    $http.get("/api/businesses").then(function(res) {
      service.businesses = res.data;
    }, function(err) {
      $log.info(err);
    });

    function create(data) {
      return $http({
        method: 'POST',
        url:    '/api/businesses',
        data:   data,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function(res) {
        service.businesses.push(res.data);
      });
    }
    return service;
  }

})();
