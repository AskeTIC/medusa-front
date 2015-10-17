(function(){
	//Creamos la app de Angular que es un módulo -medusa- sin dependencias
	var app = angular.module('medusa', [
		'ngRoute',
		'medusa.directives',
		'medusa.controllers'
	])

	.config(['$routeProvider', function($routeProvider){
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

	}]);

})();
