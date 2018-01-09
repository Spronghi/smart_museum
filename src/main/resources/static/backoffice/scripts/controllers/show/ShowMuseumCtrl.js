app.controller('ShowMuseumCtrl', function ($location, $scope, $http) {
    $http.get("/user/museum/"+$location.search().id)
        .then(function (res) {
            $scope.museum = res.data;
        });
});
