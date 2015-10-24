(function(){

	angular.module('medusa.controllers', [])

		.controller('PrincipalController', ['$scope', '$http', function($scope, $http){

		}])

		.controller('PruebasController', ['$scope', '$http', function($scope, $http){

		}])

		.controller('CamarasController', ['$scope', '$http', function($scope, $http){

		}])
		//Recoge las measures y las ordena en el orden elegido
		.controller('AsideLeftController',['$scope', function($scope){
			this.atmosphericMeasures = [];
			this.maritimeMeasures = [];
		}])
		//Envía las orders y las ordena en el orden elegido
		.controller('AsideRightController', ['$scope', function($scope){
			this.trialOrders= [];
			this.generalOrders = [];
		}])

		.controller('MeasuresController', ['$scope', '$http', function($scope, $http){

			//Atmospherics measures
			this.atmospherics = [{
				'name': 'viento',
				'imageUrl':'images/imagen1.png',
				'data':'20.5',
				'measure':'km/h',
				'class':'left-red'
				},
				{
				'name': 'temperatura',
				'imageUrl':'images/imagen2.png',
				'data':'30.1',
				'measure':'º C',
				'class':'left-green'
				},
				{
				'name': 'presion',
				'imageUrl':'images/imagen3.png',
				'data':'40.6',
				'measure':'km/h',
				'class':'left-red'
				},
				{
				'name': 'humedad',
				'imageUrl':'images/imagen4.png',
				'data':'60',
				'measure':'kg cm2',
				'class':'left-green'
				}
			];

			//Maritime measures
			this.maritime= [{
				'name': 'altura',
				'imageUrl':'images/imagen5.png',
				'data':'1.75',
				'measure':'m',
				'class':'left-red'
				},
				{
				'name': 'distancia',
				'imageUrl':'images/imagen6.png',
				'data':'3.54',
				'measure':'seg',
				'class':'left-green'
				}
			];

		}]);

})();
