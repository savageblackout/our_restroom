(function() {
  "use strict";

  angular.module("our").factory("mailingService", mailingService);

  mailingService.$inject = ["$log", "$http", "$state"];

  function mailingService($log, $http, $state) {
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
        url:    '/api/mailings',
        data:   data,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function(res) {
          service.mailings.push(res.data);
      });
    }

    $log.info("mailing Service loaded!");
    return service;

  }


})();
