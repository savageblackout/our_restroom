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
    .state("businesses", {
      url: "/businesses",
      templateUrl: "/templates/businesses.html",
      controller: "BusinessController",
      controllerAs: "vm"
    })
    .state("add", {
      url: "/add",
      templateUrl: "/templates/business_form.html",
      controller: "AddController",
      controllerAs: "vm"
    });


    $urlRouterProvider.otherwise("/");
  }

})();
