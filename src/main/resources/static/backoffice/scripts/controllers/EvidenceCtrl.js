angular
    .module('SmartmuseumApp')
    .controller('EvidenceCtrl', function ($scope, $http) {
  $http.get("/user/evidences")
        .then(function (res) {
         $scope.evidences = res.data;                
        });
});
