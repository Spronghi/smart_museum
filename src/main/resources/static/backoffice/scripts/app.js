var app = angular.module('BackofficeApp',['app.services', 'ngRoute'])
        .config(function($locationProvider) {
            $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false
                });
            });