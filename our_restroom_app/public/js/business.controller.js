(function() {
  "use strict";

  angular.module("our").controller("BusinessController", BusinessController);

  BusinessController.$inject = ["$log", "businessService", "$state"];;

  function BusinessController($log, businessService, $state) {;
    var vm = this;

    // BINDINGS

    vm.businessService = businessService;


    // FUNCTIONS

    $log.info("Business Controller loaded!");
  }

})();
