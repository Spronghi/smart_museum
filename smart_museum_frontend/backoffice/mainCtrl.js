var museumApp = angular.module('museumApp', []);
var museums = 'museums.json';
var operators = 'operators.json';
var evidences = 'evidences.json';

/*
      museumApp.controller('TMuseumCtrl', function ($scope, $http){
        $http.get(museums).success(function(data) {
          $scope.museums = data;
        });
      });
    
*/
museumApp.controller('TMuseumCtrl', function ($scope, $http) {
  $http.get(museums)
        .then(function (res) {
          $scope.museums = res.data;                
        });
});

museumApp.controller('TOperatorCtrl', function ($scope, $http) {
  $http.get(operators)
       .then(function (res) {
          $scope.operators = res.data;                
        });
});

museumApp.controller('TEvidenceCtrl', function ($scope, $http) {
  $http.get(evidences)
       .then(function (res) {
          $scope.evidences = res.data;                
        });
});


