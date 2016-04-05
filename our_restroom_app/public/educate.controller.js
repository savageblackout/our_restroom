(function() {
  "use strict";

  angular.module("our").controller("EducateController", EducateController);

  EducateController.$inject = ["$log"];

  function EducateController($log) {
    var vm = this;

    // BINDINGS
     vm.bizInfo = {
      name: "Olive Garden",
      address1: "123 Main Street",
      address2: "New York, NY 20876",
      email: "og@email.com",
      twitterHandle: "@og"
    };
    vm.submitEducateForm = submitEducateForm


    // FUNCTIONS
    function submitEducateForm() {

      $log.info(vm.bizInfo);
    }
    $log.info("Educate Controller loaded!");
  }

})();
