angular
  .module('HomeApp', [])
  .service('loginService', function() {
    this.currentOperator = [];
  })
  .controller('LoginCtrl', ['$scope', 'loginService', '$http', '$window', function ($scope, loginService, $http, $window) {
      $scope.currentOperator = [];
      $scope.login = function () {
         $http.get("/user/login/"+$scope.vm.username)
            .then(function (res) {
            $scope.currentOperator = res.data;
            if($scope.currentOperator.username == $scope.vm.username){
              loginService.currentOperator = $scope.currentOperator;
              $window.location.href = "/backoffice/index.html";
            } else {
              $scope.userLabel = "Invalid username or password";
            }
        });
      }
  }]);
