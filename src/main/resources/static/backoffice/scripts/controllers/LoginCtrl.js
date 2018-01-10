app.controller('LoginCtrl', function ($scope, dataService, $http, $window) {
    $scope.currentOperator = [];
    $scope.logout = function (){
        dataService.unset();
        $window.location.href = "/backoffice/login.html";
    }
    $scope.login = function () {
        $http.get("/user/login/"+$scope.vm.username)
            .then(function (res) {
                $scope.currentOperator = res.data;
                if($scope.currentOperator.username == $scope.vm.username){
                    dataService.set($scope.currentOperator);
                    if($scope.currentOperator.admin){
                        $window.location.href = "/backoffice/admin.html";
                    } else {
                        $window.location.href = "/backoffice/index.html";
                    }
                } else {
                    $scope.userLabel = "Invalid username or password";
                }
            });
        }
    });
