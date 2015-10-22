(function(){

	angular.module('medusa.controllers', [])

		.controller('PrincipalController', ['$scope', '$http', function($scope, $http){

		}])

		.controller('PruebasController', ['$scope', '$http', function($scope, $http){

		}])

		.controller('CamarasController', ['$scope', '$http', function($scope, $http){

		}])

		.controller('MeasuresController', ['$scope', '$http', function($scope, $http){

			//Atmospherics measures
			this.atmospherics= [{
				'name': 'Viento',
				'imageUrl':'images/imagen1.png',
				'data':'20.5',
				'measure':'km/h',
				'class':'left-red'
				},
				{
				'name': 'Temperatura',
				'imageUrl':'images/imagen2.png',
				'data':'30.1',
				'measure':'º C',
				'class':'left-green'
				},
				{
				'name': 'XXXX',
				'imageUrl':'images/imagen3.png',
				'data':'40.6',
				'measure':'km/h',
				'class':'left-red'
				},
				{
				'name': 'ZZZZ',
				'imageUrl':'images/imagen4.png',
				'data':'60',
				'measure':'kg cm2',
				'class':'left-green'
				}
			];

			//Maritime measures
			this.maritime= [{
				'name': 'item2',
				'imageUrl':'images/imagen5.png',
				'data':'1.75',
				'measure':'m',
				'class':'left-red'
				},
				{
				'name': 'item2',
				'imageUrl':'images/imagen6.png',
				'data':'3.54',
				'measure':'seg',
				'class':'left-green'
				}
			];

		}]);

})();
