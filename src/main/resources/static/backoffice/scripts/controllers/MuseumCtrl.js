angular
    .module('BackofficeApp')
    .controller('museumCtrl', function ($scope, $http) {
  $http.get("/user/museums")
        .then(function (res) {
         $scope.museums = res.data;                
        });
});
