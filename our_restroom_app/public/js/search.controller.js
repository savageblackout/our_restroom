(function() {
  "use strict";

  angular.module("our").controller("SearchController", SearchController);

  SearchController.$inject = ["$log", "searchService", "$http", "$state"];

  function SearchController($log, searchService, $http, $state) {
    var vm = this;

    // BINDINGS
    vm.searchBizResults = [];
    vm.searchResults = {
      bizName: "",
      bizAddress1: "",
      bizAddress2: ""
    };
    getBizName();

    // FUNCTIONS
    function getBizName() {
      $log.info("click is working!");
      $http.get("api/searches")
      .then(function(res) {
        vm.bizName = res.data;
      }, function(err) {
        $log.info(err);
      });
    }
    $log.info("search controller loaded!");

  };

})();
