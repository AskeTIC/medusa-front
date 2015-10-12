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
				templateUrl: 'views/pricipal.html'
				controller: 'principalController'
			})
			.when('/pruebas', {
				templateUrl: 'views/pruebas.html',
				controller: 'pruebasController',
				controllerAs: 'pruebasCtl'
			})
			.when('/camaras', {
				templateUrl: 'views/camaras.html',
				controller: 'camarasController',
				controllerAs: 'camsCtl'
			})
			.otherwise({
				redirectTo: '/'
			});

	}]);

})();
