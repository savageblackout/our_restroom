(function() {
  "use strict";

  angular.module("our").factory("businessService", businessService);

  businessService.$inject = ["$log", "$http"];

  function businessService($log, $http) {
    $log.info("business service loaded!");

    var service = {
      create: create,
      businesses: [],
      upVote: upVote,
      // uniqueUpVote: uniqueUpVote
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

    // function uniqueUpVote(){
    //   businesses.filter('uniqueId', function () {
    //   return function(inputs,filterValues) {
    //   var output = [];
    //   angular.forEach(inputs, function (input) {
    //     if (filterValues.indexOf(input.id) !== true)
    //         output.push(input);
    //    });
    //    return output;
    //   };
    //   });
    // }

    return service;
  }

})();
