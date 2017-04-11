angular
  .module('usersController', [])
  .controller('usersController', function(loadServices) {
  var vm = this;

  activate();

  function activate(){
    loadServices.getUsersList()
                .then(function(data){
                  vm.users = data;
                });
  }

});
