(function() {
  "use strict";

  angular.module("our").controller("BusinessController", BusinessController);

  BusinessController.$inject = ["$log", "businessService", "$state", "$http"];;

  function BusinessController($log, businessService, $state, $http) {;
    var vm = this;

    // BINDINGS

    vm.businessService = businessService;
    vm.upVote = businessService.upVote;



    $log.info("Business Controller loaded!");
  }

})();
