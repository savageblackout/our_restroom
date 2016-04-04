(function() {
  "use strict";

  angular.module("our").controller("EducateController", EducateController);

  EducateController.$inject = ["$log"];

  function EducateController($log) {
    var vm = this;
    $log.info("Educate Controller loaded!");

    function submitEducateForm() {

    }
  }

})();
