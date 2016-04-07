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
      showAllBiz: showAllBiz
    };

    function showAllBiz(){
      $http.get("/api/businesses").then(function(res) {
        service.businesses = res.data;
      }, function(err) {
        $log.info(err);
      });
    }

    showAllBiz();

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

      return $http({
        method: 'PUT',
        url: "api/businesses/" + biz._id,
        data: biz,
        headers: {
          'Content-Type': "application/json"
        }
       }).then(function(res) {
        $log.info("Success: ", res.data.upVote);
        if(res.data.upVote != biz.upVote) biz.upVote++;
      }, function(err) {
        $log.info(err);
      });
      $log.info(biz);
    }

    return service;

    // function clickLimit() {
    //   var u
    // }
  }

})();
