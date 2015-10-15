(function(){
	//Creamos la app de Angular que es un módulo -medusa- sin dependencias
	var app = angular.module('medusa', [
		'ngRoute',
		'medusa.directives',
		'medusa.controllers'
	]);

	app.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'views/principal.html',
				controller: 'PrincipalController'
			})
			.when('/pruebas', {
				templateUrl: 'views/pruebas.html',
				controller: 'PruebasController'
			})
			.when('/camaras', {
				templateUrl: 'views/camaras.html',
				controller: 'CamarasController'
			})
			.otherwise({
				redirectTo: '/'
			});

	}]);

})();
