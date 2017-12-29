angular.module('BackofficeApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
	    $routeProvider
	            .when('/more:id', {
	            templateUrl: 'template.html'
	            //.otherwise({
	            //    redirectTo: '/'
	        });
    }]);