(function(){

	angular.module('medusa.controllers', [])

		.controller('PrincipalController', ['$scope', '$http', function($scope, $http){

		}])

		.controller('PruebasController', ['$scope', '$http', function($scope, $http){
			
		}])

		.controller('CamarasController', ['$scope', '$http', function($scope, $http){
			
		}])

		.controller('MeasuresController', ['$scope', '$http', function($scope, $http){
			
			//Datos para atmosféricas
			this.atmosfericas= {
				'item1':{
				'imagenurl':'images/imagen1.png',
				'data':'20.5',
				'measure':'km/h',
				'class':'left-red'
				},
				'item2':{
				'imagenurl':'images/imagen2.png',
				'data':'30.1',
				'measure':'º C',
				'class':'left-green'
				},
				'item3':{
				'imagenurl':'images/imagen3.png',
				'data':'40.6',
				'measure':'km/h',
				'class':'left-red'
				},
				'item4':{
				'imagenurl':'images/imagen4.png',
				'data':'60',
				'measure':'kg cm2',
				'class':'left-green'
				},
				'item5':{
				'imagenurl':'images/imagen4.png',
				'data':'60',
				'measure':'%',
				'class':'left-green'
				}
			};

			//Datos para marítimas
			this.maritimas= {
				'item1':{
				'imagenurl':'images/imagen5.png',
				'data':'1.75',
				'measure':'m',
				'class':'left-red'
				},
				'item2':{
				'imagenurl':'images/imagen6.png',
				'data':'3.54',
				'measure':'seg',
				'class':'left-green'
				},
				'item3':{
				'imagenurl':'images/imagen5.png',
				'data':'1.75',
				'measure':'m',
				'class':'left-red'
				},
				'item4':{
				'imagenurl':'images/imagen6.png',
				'data':'3.54',
				'measure':'seg',
				'class':'left-green'
				}
			};

		}]);

})();
