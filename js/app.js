(function(){
	//Creamos la app de Angular que es un módulo -medusa- sin dependencias
	var app = angular.module('measures', []);
	
	//DIRECTIVAS PARA EXTRUCTURA
	app.directive('asideLeft', function(){
		return{
			//De tipo elemento
			restrict: 'E',
			//Le indicamos la URL
			templateUrl: '/partials/aside-left.html'
			controller: function(){
				this.measure = {
	                        	name : 'temperatura',
        	                	data : '34',
                	        	date : '12:00:02:04'
                		}:

			}
			controllerAs: 'meCtl'
		}
	});

})();
