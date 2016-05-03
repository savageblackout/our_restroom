(function() {
  "use strict";

  angular.module("our").controller("AddController", AddController);

  AddController.$inject = ["$log", "businessService", "$state", "$scope"];;

  function AddController($log, businessService, $state, $scope) {
    var vm = this;

    // BINDINGS
     vm.bizInfo = {
      name: "",
      address1: "",
      address2: "",
      email: "",
      twitterHandle: "",
      normalized: ""
    };
    vm.submitBusinessForm = submitBusinessForm;
    vm.businessService    = businessService;
    vm.successfulSubmit   = businessService.successfulSubmit;



    // FUNCTIONS
    function submitBusinessForm() {
      businessService
        .create(vm.bizInfo)
        .then(
          // function(data) {
          //   var reg = new RegExp(vm.bizInfo.name, "i");
          //   data = data.filter(function(biz) {
          //     if(reg.test(biz.name)) alert("This business exists in our database. You may upvote this business by clicking on the Show Businesses button and searching for the business using the Search function.")
          //   }),
              function() {
              $state.go("success");
            }
          ),
          function(err) { $log.info("Error:", err); }
        }

    // function formSubmitted(isValid) {
    //   $scope.submitted = true;
    //   if(isValid){
    //   }
    // }


  }

})();
