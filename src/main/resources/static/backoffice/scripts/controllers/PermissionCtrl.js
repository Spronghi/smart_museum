app.controller('PermissionCtrl', function (loginService, $location, $scope, $http, $window) {
    if(loginService.getCurrentId()==0){
        $window.location.href = "/backoffice/error.html?error=Permission error";
    }
});
