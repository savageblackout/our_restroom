(function() {
  "use strict";

  angular.module("our").controller("AddController", AddController);

  AddController.$inject = ["$log", "businessService", "$state"];;

  function AddController($log, businessService, $state) {
    var vm = this;
    vm.message = ''

    // BINDINGS

     vm.bizInfo = {
      name: "",
      address1: "",
      address2: "",
      email: "",
      twitterHandle: "",
      normalized: ""
    };
    vm.submitBusinessForm = submitBusinessForm;
    vm.businessService    = businessService;
    vm.successfulSubmit   = businessService.successfulSubmit;

    // FUNCTIONS
    function submitBusinessForm() {
      businessService
        .create(vm.bizInfo)
        .then(function(data) {
          $log.info("DATA--->", data);
            businessService.businesses.push(data.data);
            // businessService.successfulSubmit();
            businessService.showAllBiz();
              $state.go("success");
            }
          )
        .catch(function(err){
          // $log.info("Error:", err)
          vm.message = err.data;
          vm.showMessage = true;
          $log.debug("Error message client side add controller-->", err);
          // $log.debug("VM MEssage -->", vm.message);
        })
      }



  }

})();
