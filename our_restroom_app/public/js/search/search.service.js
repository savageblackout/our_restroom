(function() {
  "use strict";

  angular.module("our").factory("searchService", searchService);

  searchService.$inject = ["$log", "$http", "$state"];

  function searchService($log, $http, $state) {
    var vm = this;

    // BINDINGS
    vm.data = searchService
    var service = {
      search: search
    };

    return service;

    function search(bizName) {
      var bizName = $http("api/searches?name=" + bizName)
      .then(function(res) {
        $log.info("test: ", res.data);
      })
      return bizName;
    }

    $log.info("search service loaded!");
  }

})();
