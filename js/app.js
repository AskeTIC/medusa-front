(function(){
	"use strict";
	//Creamos la app de Angular que es un módulo -medusa- sin dependencias
	var app = angular.module('medusa', [
		'highcharts-ng',
		'ngRoute',
		'medusa.directives',
		'medusa.controllers',
		'medusa.services'
	])
	.config(config);

	function config ($locationProvider, $routeProvider){
		$locationProvider.html5Mode(true);
		$routeProvider
			.when('/', {
				templateUrl: 'views/principal.html'
			})
			.when('/pruebas', {
				templateUrl: 'views/trials.html'
			})
			.when('/camaras', {
				templateUrl: 'views/cameras.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	}

})();
