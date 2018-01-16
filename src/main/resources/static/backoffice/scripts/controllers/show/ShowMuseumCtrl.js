app.controller('ShowMuseumCtrl', function ($location, $scope, $http) {
    $http.get("/user/museum/"+$location.search().id)
        .then(function (res) {
            $scope.museum = res.data;
        });
    var deleteRow = function(){
        $http.delete("/user/museum/"+$location.search().id)
            .then(function (res) {
                $scope.putResultMessage = res.data;
            });
    }
});
