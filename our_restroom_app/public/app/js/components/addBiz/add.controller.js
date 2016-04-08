(function() {
  "use strict";

  angular.module("our").controller("AddController", AddController);

  AddController.$inject = ["$log", "businessService", "$state"];;

  function AddController($log, businessService, $state) {;
    var vm = this;

    // BINDINGS
     vm.bizInfo = {
      name: "",
      address1: "",
      address2: "",
      email: "",
      twitterHandle: "",
    };
    vm.submitBusinessForm = submitBusinessForm;
    vm.businessService = businessService;
    vm.successfulSubmit = businessService.successfulSubmit;


    // FUNCTIONS
    function submitBusinessForm() {
      businessService
        .create(vm.bizInfo)
        .then(
          function() {
            $state.go("success");
          },
          function(err) { $log.info("Error:", err); }
        );
    }

    // var transporter  = nodemailer.createTransport({
    //     transport: 'ses', // loads nodemailer-ses-transport
    //     accessKeyId: 'process.env.KEY_ID',
    //     secretAccessKey: 'process.env.SECRET_ACCESS_KEY'
    // });
    // var data = {
    //   to: 'ourrestroomtest@gmail.com',
    //   subject: 'New Business Form Submitted!',
    //   text: 'Biz Form',
    // }
    // transporter.sendMail(data, cb(res, err) {
    //   $log.info("bizInfo: ", vm.bizInfo)

    // })
    $log.info("Add Controller loaded!");

  }

})();
