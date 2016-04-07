(function() {
  "use strict";

  angular.module("our").controller("BusinessController", BusinessController);

  BusinessController.$inject = ["$log", "businessService", "$state", "$http"];;

  function BusinessController($log, businessService, $state, $http) {;
    var vm = this;

    // BINDINGS

    vm.businessService = businessService;
    vm.upVote = businessService.upVote;
    vm.searchBizResults = [];
    vm.searchResults = {
      bizName: "",
      bizAddress1: "",
      bizAddress2: ""
    };
    vm.getBizName = getBizName;

    // FUNCTIONS
    function getBizName(val) {
      $log.info("click is working!");
      // $state.go('search');
      $log.info(val);
      $http.get("api/businesses?search=" + val)
      .then(function(res) {
        $log.info(res.data);
        businessService.businesses = res.data;
      }, function(err) {
        $log.info(err);
      });
    }




    $log.info("Business Controller loaded!");
  }

})();
