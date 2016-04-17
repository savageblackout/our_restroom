(function() {
  "use strict";

  angular.module("our").factory("contactService", contactService);

  contactService.$inject = ["$log", "$http", "$state"];

  function contactService($log, $http, $state) {
    var vm = this;

    // BINDINGS

    var service = {
      create: create,
      contacts: [],
    }
    // FUNCTIONS

    function create(data) {
      return $http({
        method: 'POST',
        url:    '/api/contacts',
        data:   data,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function(res) {
          service.contacts.push(res.data);
      });
    }

    $log.info("contact Service loaded!");
    return service;

  }


})();
