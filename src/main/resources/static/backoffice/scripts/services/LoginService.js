angular
    .module('app.services')
    .factory('loginService', ['$http', '$cookies', '$cookieStore', loginService]);
             
function loginService($http, $cookies, $cookieStore) {
    function set(data) {
      $cookies.operatorId = data.id;
      $cookieStore.put('operatorId', data.id);
    }
    function getCurrentId() {
      return $cookieStore.get('operatorId');
    }
    return {
      set: set,
      getCurrentId: getCurrentId
    }
}