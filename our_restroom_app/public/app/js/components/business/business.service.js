(function() {
  "use strict";

  angular.module("our").factory("businessService", businessService);

  businessService.$inject = ["$log", "$http", "$state"];

  function businessService($log, $http, $state) {
    var vm = this;

    var service = {
      create: create,
      businesses: [],
      upVote: upVote,
      showAllBiz: showAllBiz
    };

    function showAllBiz(){
      $http.get("/api/businesses")
      .then(function(res) {
        return service.businesses = res.data;
      }), function(err) {
          $log.info(err);
          }
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
       showAllBiz();
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

    function successfulSubmit() {
      if(create()){
      $state.go("success");
      }
    }
    return service;
  }
})();
