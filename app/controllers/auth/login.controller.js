  angular
    .module('LoginController', [])
    .controller('LoginController', function($state) {
    var vm = this;
    vm.validLogin = validLogin;

    function validLogin(){
      $state.go('dashboard');
    }

  });
