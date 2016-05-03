(function() {
  "use strict";

  angular.module("our").controller("BusinessController", BusinessController);

  BusinessController.$inject = ["$log", "businessService", "$state", "$http"];;

  function BusinessController($log, businessService, $state, $http) {
    var vm = this;

    // BINDINGS

    vm.businessService = businessService;
    vm.upVote = businessService.upVote;
    vm.getBizName = getBizName;
    vm.claire = true;
    vm.showAfterSearch = showAfterSearch;

    // FUNCTIONS

    function getBizName(val) {
      vm.claire = false;
      $http.get("api/businesses?search=" + val)
      .then(function(res) {
        $log.info(res.data);
        vm.businessService.businesses = res.data;
      }, function(err) {
        $log.info(err);
      });
    }

    function showAfterSearch(){
      vm.claire = true;
      vm.businessService.showAllBiz();
    }
  }

})();
