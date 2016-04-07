(function() {
  "use strict";

  angular.module("our").controller("AddController", AddController);

  AddController.$inject = ["$log", "businessService", "$state"];;

  function AddController($log, businessService, $state) {;
    var vm = this;

    // BINDINGS
     vm.bizInfo = {
      name: "",
      address1: "",
      address2: "",
      email: "",
      twitterHandle: "",
    };
    vm.submitBusinessForm = submitBusinessForm;
    vm.businessService = businessService;


    // FUNCTIONS
    function submitBusinessForm() {
      businessService
        .create(vm.bizInfo)
        .then(
          function() {
            $state.go("businesses");
          },
          function(err) { $log.info("Error:", err); }
        );
    }
    $log.info("Add Controller loaded!");
  }

})();