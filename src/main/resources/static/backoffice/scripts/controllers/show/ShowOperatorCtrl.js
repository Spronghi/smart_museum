app.controller('ShowOperatorCtrl', function ($location, $scope, $http) {
    $http.get("/user/operator/"+$location.search().id)
        .then(function (res) {
            $scope.operator = res.data;
        });
});
