(function(){
	//Creamos la app de Angular que es un módulo -medusa- sin dependencias
	var app = angular.module('measures', []);
	
	app.controller('measuresController', function(){
		this.measure = {
			name : 'temperatura',
			data : '34',
			date : '12:00:02:04' 
		};
	});

})();
