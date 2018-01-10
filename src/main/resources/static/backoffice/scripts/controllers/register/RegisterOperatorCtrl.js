app.controller('RegisterOperatorCtrl', function (dataService, $location, $scope, $http, $window) {
    if(dataService.getCurrentOperator().admin){
        $http.get("/user/museums")
            .then(function (res) {
                $scope.museums = res.data;
            });
        $scope.vm = [];
        $scope.vm.admin=false;
        $scope.getMuseum = function(id){
            $http.get("/user/museum/"+id)
                .then(function (res) {
                    $scope.vm.museum = res.data;
                });
        }
        $scope.register = function (){
            var config = {
                headers : {
                    'Accept': 'text/plain'
                }
            }
            var data = {
                username: $scope.vm.username,
                password: $scope.vm.password,
                name: $scope.vm.name,
                surname: $scope.vm.surname,
                email: $scope.vm.email,
                admin: $scope.vm.admin,
                museum: 1
            };

            $http.post('/user/operator', data, config).then(function (response) {
                $scope.postResultMessage = response.data;
                $window.location.href = "/backoffice/login.html";
            }, function error(response) {
                $scope.postResultMessage = "Error with status: " +  response.statusText;
            });
        }
    } else {
        $window.location.href = "/backoffice/error.html?error=Permission error";
    }
});
