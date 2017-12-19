angular
    .module('SmartmuseumApp')
    .controller('OperatorCtrl', function ($scope, $http) {
  $http.get("/user/operators")
        .then(function (res) {
         $scope.operators = res.data;                
        });
});
