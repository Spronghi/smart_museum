angular
    .module('app.services')
    .factory('operatorService', ['$http', operatorService]);
             
function operatorService($http) {
    function get(id) {
        return $http.get('/user/operator/'+ id).then(function(response) {    
          return response.data;
        });
    }
    function remove(id){
        $http.delete('/user/operator/'+ id);
    }
    return {
      get: get,
    }
}