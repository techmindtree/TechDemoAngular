angular
.module('index.router', [])
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('auth', {
        url: '/auth/login',
        templateUrl: 'controllers/auth/login.html',
        controller: 'LoginController',
        controllerAs: '$vm'
  });

  $urlRouterProvider.otherwise("/auth/login");

});
