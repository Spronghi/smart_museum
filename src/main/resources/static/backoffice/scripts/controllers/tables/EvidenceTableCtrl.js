app.controller('EvidenceTableCtrl', function ($scope, $http, loginService) {
    $http.get("/user/evidences_by_operator/"+loginService.getCurrentId())
        .then(function (res) {
            $scope.evidences = res.data;
        });
});
