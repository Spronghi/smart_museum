app.controller('ShowEvidenceCtrl', function ($location, $scope, $http) {
    $http.get("/user/evidence/"+$location.search().id)
        .then(function (res) {
            $scope.evidence = res.data;
        });
});
