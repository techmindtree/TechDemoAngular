angular
  .module('index.config', [])
  .config(config);

  function config(toastrConfig){
   toastrConfig.timeOut = 3000;
   toastrConfig.positionClass = 'toast-top-right';
   toastrConfig.progressBar = true;
  }
