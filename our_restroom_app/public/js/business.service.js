(function() {
  "use strict";

  angular.module("our").factory("businessService", businessService);

  businessService.$inject = ["$log", "$http"];

  function businessService($log, $http) {
    $log.info("business service loaded!");

    var service = {
      create: create,
      businesses: [],
      upVote: upVote
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

    function upVote(biz) {
      $log.info(biz);
      biz.upVote++;
       return $http({
        method: 'PUT',
        url: "api/businesses/" + biz._id,
        data: biz,
        headers: {
          'Content-Type': 'application/json'
        }
       }).then(function(res) {
        $log.info("Success: ", res);
      }, function(err) {
        $log.info(err);
      });
      $log.info(biz);
    }

    return service;
  }

})();
