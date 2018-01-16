app.controller('ShowEvidenceCtrl', function ($window, $location, $scope, $http) {
    $scope.vm = [];
    $http.get("/user/evidence/"+$location.search().id)
        .then(function (res) {
            $scope.vm.evidence = res.data;
        });
    var deleteRow = function(){
        $http.delete("/user/evidence/"+$location.search().id)
            .then(function (res) {
                $scope.putResultMessage = res.data;
            });
    }
    var showOperator = function(){
        $window.location.href = "/backoffice/show/show-operator?id="+$scope.vm.evidence.operator.id;
    }
    
});
