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
                    templateUrl : "backoffice/table-museums.html",
                    controller : "MuseumTableCtrl"
                })
                .when("/table-operators", {
                    templateUrl : "backoffice/table-operators.html",
                    controller : "OperatorTableCtrl"
                })
                .when("/table-evidences", {
                    templateUrl : "backoffice/table-evidences.html",
                    controller : "EvidenceTableCtrl"
                });
            });