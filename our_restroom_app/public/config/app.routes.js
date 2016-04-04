(function() {
  "use strict";

  angular.module("our").config(appRoutes);

  appRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function appRoutes($stateProvider, $urlRouterProvider){
    $stateProvider
    .state("welcome", {
      url: "/",
      templateUrl: "/templates/welcome.html"
    })
    .state("about", {
      url: "/about",
      templateUrl: "/templates/about.html"
    })

  $urlRouterProvider.otherwise("/");
  }

})();
