(function() {
  "use strict";

  angular.module("our").config(appRoutes);

  appRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function appRoutes($stateProvider, $urlRouterProvider){
    $stateProvider
    .state("welcome", {
      url: "/",
      templateUrl: "app/templates/welcome.html"
    })
    .state("about", {
      url: "/about",
      templateUrl: "app/templates/about.html"
    })
    .state("businesses", {
      url: "/businesses",
      templateUrl: "app/templates/businesses.html",
      controller: "BusinessController",
      controllerAs: "vm"
    })
    .state("add", {
      url: "/add",
      templateUrl: "app/templates/business_form.html",
      controller: "AddController",
      controllerAs: "vm"
    })
    .state("search", {
      url: "/searches",
      templateUrl: "app/templates/name.html",
      controller: "BusinessController",
      controllerAs: "vm"
    })
    .state("success", {
      url: "/success",
      templateUrl: "app/templates/successful_submit.html",
      controller: "BusinessController",
      controllerAs: "vm"
    })
    .state("contact", {
      url: "/contacts",
      templateUrl: "app/templates/contact.html",
      controller: "ContactController",
      controllerAs: "vm"
    });

    $urlRouterProvider.otherwise("/");
  }

})();
