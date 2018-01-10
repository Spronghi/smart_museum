var app = angular.module('BackofficeApp',['app.services', 'ngRoute'])
        .config(function($routeProvider, $locationProvider) {
            $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false
                });
            $routeProvider.when("/", {
                    templateUrl : "backoffice/index.html"
                })
                .when("/login", {
                    templateUrl : "backoffice/login.html",
                    controller : "Login.Ctrl"
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
                    controller : "EvidenceOperatorCtrl"
                });
            });