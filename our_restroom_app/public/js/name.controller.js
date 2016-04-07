(function() {
  "use strict";

  angular.module("our").controller("NameController", NameController);

  NameController.$inject = ["$log", "searchService", "$state"];

  function NameController() {
    var vm = this;

    // BINDINGS:

    vm.name;
    vm.searchService = searchService;
    vm.getName = getName();

    vm.getName = function() {
      var name = vm.search.name;
      $state.go("name");
      searchService
        .search(name)
        .then(function(response) {
          vm.name = response;
          $log.info("new name: ", response)
        }, function(err) {
            $log.info(err);
        });
    }
    $log.info("name controller loaded!");
  }


})();
