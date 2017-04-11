angular
  .module('index.service', [])
  .value('hostURL', 'https://jsonplaceholder.typicode.com')
  .service('loadServices', loadServices);

  function loadServices(hostURL, $http){
    var loadapi = {
      getUsersList: getUsersList
    };

    return loadapi;

    function getUsersList(){
    return $http({
        url: hostURL+'/posts',
        method: 'GET'
      })
      .then(function (response){
        return response.data;
      })
      .catch(function (err){

      });
    }
  }
