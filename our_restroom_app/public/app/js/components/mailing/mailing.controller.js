(function() {
  "use strict";

  angular.module("our").controller("MailingController", MailingController);

  MailingController.$inject = ["$log", "$state", "$http", "mailingService"];

  function MailingController($log, $state, $http, mailingService) {
    var vm = this;

    // BINDINGS
    vm.userInfo = {
      name: "",
      email: ""
    };
    vm.mailingService = mailingService;
    vm.submitMailing = submitMailing;
    vm.create = vm.mailingService.create;

    // FUNCTIONS

    function submitMailing() {
      $log.info("submit button functions!");
      mailingService
      .create(vm.userInfo)
      .then(
        function() {
          $state.go("mailingsuccess");
        }, function(err) { $log.info("Error: ", err); }
      );

    }

    $log.info("Mailing Controller loaded!");
  }



})();
