app.controller('EvidenceTableCtrl', function ($scope, $http, dataService) {
    $http.get("/user/evidences_by_operator/"+dataService.getCurrentOperator().id)
        .then(function (res) {
            $scope.evidences = res.data;
        });
});
