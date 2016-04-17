(function() {
  "use strict";

  angular.module("our").controller("ContactController", ContactController);

  ContactController.$inject = ["$log", "$state", "$http", "contactService"];

  function ContactController($log, $state, $http, contactService) {
    var vm = this;

    // BINDINGS
    vm.contactInfo = {
      name: "Larry Harry",
      email: "larry@email.com"
    };
    vm.contactService = contactService;
    vm.submitContact = submitContact;
    // vm.create = vm.contactService.create;
    // FUNCTIONS

    function submitContact() {
      $log.info("submit button functions!");

    }

    $log.info("Contact Controller loaded!");
  }



})();
