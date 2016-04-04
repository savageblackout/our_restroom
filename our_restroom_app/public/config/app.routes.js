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
    .state("educate", {
      url: "/educate",
      templateUrl: "/templates/educate_form.html",
      controller: "EducateController",
      controllerAs: "vm"
    })

  $urlRouterProvider.otherwise("/");
  }

})();
