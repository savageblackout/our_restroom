(function() {
  "use strict";

  angular.module("our").controller("NavbarController", NavbarController);

  NavbarController.$inject = ["$log"];

  function NavbarController($log) {
    var vm = this;
    $log.info("NavBar Controller loaded!");
  }

})();
