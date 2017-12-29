angular
  .module('HomeApp', [])
  .controller('LoginCtrl', ['$scope', '$rootScope', '$http', '$window', function ($scope, $rootScope, $http, $window) {
      $scope.currentOperator = [];
      $scope.login = function () {
         $http.get("/user/login/"+$scope.vm.username)
            .then(function (res) {
            $scope.currentOperator = res.data;
            if($scope.currentOperator.username == $scope.vm.username){
              $rootScope.currentOperator = $scope.currentOperator;
              $window.location.href = "/backoffice/index.html"; 
            }
        });
      }
  }]);
