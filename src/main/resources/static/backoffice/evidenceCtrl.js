var museumApp = angular.module('museumApp', []);

museumApp.controller('MuseumCtrl', function($scope, $http) {
  $http.get('museums.json')
       .then(function(res){
          $scope.museums = res.data;                
        });
});

museumApp.controller('EvidenceCtrl', function($scope, $http) {
  $http.get('evidences.json')
       .then(function(res){
          $scope.evidences = res.data;                
        });
});