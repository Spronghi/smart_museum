app.controller('LoginCtrl', function ($scope, loginService, operatorService, $http, $window) {
    $scope.currentOperator = [];
    $scope.login = function () {
        $http.get("/user/login/"+$scope.vm.username)
            .then(function (res) {
                $scope.currentOperator = res.data;
                if($scope.currentOperator.username == $scope.vm.username){
                    loginService.set($scope.currentOperator);
                    if($scope.currentOperator.admin == true){
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