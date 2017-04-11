  angular
    .module('LoginController', [])
    .controller('LoginController', function($state, toastr, $scope, $mdDialog, $timeout) {
    var vm = this;
    vm.validLogin = validLogin;
    vm.showAdvanced = showAdvanced;

    function validLogin(){
      showAdvanced();
      $timeout( function(){
        $mdDialog.cancel();
        toastr.success('Welcome User to Dashboard')
        $state.go('dashboard');
      }, 4000 );
    }

    function showAdvanced(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'controllers/dialog/loadingDialog.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:false
      });
    }

    function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }

  });
