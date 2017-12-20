angular
    .module('HomeApp')
    .controller('MuseumListCtrl', function ($scope, $http) {
  $http.get("/user/museums")
        .then(function (res) {
         $scope.museums = res.data;                
        });
});
