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
    .state("mailing", {
      url: "/mailing",
      templateUrl: "app/templates/mailing_list.html",
      controller: "MailingController",
      controllerAs: "vm"
    })
    .state("mailingsuccess", {
      url: "/mailingsuccess",
      templateUrl: "app/templates/mailing_success.html",
      controller: "MailingController",
      controllerAs: "vm"
    })
    .state("contact", {
      url: "/contactus",
      templateUrl: "app/templates/contact_form.html",
      controller: "ContactController",
      controllerAs: "vm"
    })
    .state("contactsuccess", {
      url: "/contactsuccess",
      templateUrl: "app/templates/contact_success.html",
      controller: "ContactController",
      controllerAs: "vm"
    })
    .state("howworks", {
      url: "/howworks",
      templateUrl: "app/templates/how_works.html"
    });

    $urlRouterProvider.otherwise("/");
  }

})();
