app.controller('ShowOperatorCtrl', function (dataService, $location, $scope, $http, $window) {
    if(dataService.getCurrentId()!=0){
       $http.get("/user/operator/"+$location.search().id)
        .then(function (res) {
            $scope.operator = res.data;
        });
        var showMuseum = function(){
            $window.location.href = "/backoffice/show/show-museum?id="+$scope.operator.museum.id;
        }
    } else {
        $window.location.href = "/backoffice/error.html?error=Permission error";
    }
});
