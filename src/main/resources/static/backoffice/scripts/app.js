var app = angular.module('BackofficeApp',['app.services', 'ngRoute'])
        .config(function($routeProvider, $locationProvider) {
            $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false
                });
            $routeProvider.when("/", {
                    templateUrl : "backoffice/login.html",
                    controller : "Login.Ctrl"
                })
                .when("/login", {
                    templateUrl : "backoffice/login.html",
                    controller : "Login.Ctrl"
                })
                .when("/home", {
                    templateUrl : "backoffice/index.html"
                })
                .when("/admin", {
                    templateUrl : "backoffice/tables/table-museums.html",
                    controller : "MuseumTableCtrl"
                })
                .when("/table-museums", {
                    templateUrl : "backoffice/tables/table-museums.html",
                    controller : "MuseumTableCtrl"
                })
                .when("/table-operators", {
                    templateUrl : "backoffice/tables/table-operators.html",
                    controller : "OperatorTableCtrl"
                })
                .when("/table-evidences", {
                    templateUrl : "backoffice/tables/table-evidences.html",
                    controller : "EvidenceTableCtrl"
                })
                .when("/register-operator", {
                    templateUrl : "backoffice/register/register-operator.html",
                    controller : "RegisterOperatorCtrl"
                })
                .when("/register-museum", {
                    templateUrl : "backoffice/register/register-museum.html",
                    controller : "RegisterMuseumCtrl"
                })
                .when("/register-evidence", {
                    templateUrl : "backoffice/register/register-evidence.html",
                    controller : "RegisterEvidenceCtrl"
                })
                .when("/show-operator", {
                    templateUrl : "backoffice/show/show-operator.html",
                    controller : "ShowOperatorCtrl"
                })
                .when("/show-museum", {
                    templateUrl : "backoffice/show/show-museum.html",
                    controller : "ShowMuseumCtrl"
                })
                .when("/show-evidence", {
                    templateUrl : "backoffice/show/show-evidence.html",
                    controller : "ShowEvidenceCtrl"
                });
            });

app.directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9]/g, '');

                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }            
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});