app.controller('ShowOperatorCtrl', function (loginService, $location, $scope, $http, $window) {
    if(loginService.getCurrentId()!=0){
       $http.get("/user/operator/"+$location.search().id)
        .then(function (res) {
            $scope.operator = res.data;
        });
        $http.get("/user/museums")
        .then(function (res) {
            $scope.museums = res.data;
        });
    } else {
        $window.location.href = "/backoffice/error.html?error=Permission error";
    }
});
