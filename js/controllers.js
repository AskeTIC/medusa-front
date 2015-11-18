(function(){
	"use strict";
	angular
		.module('medusa.controllers', ['medusa.services'])
		.controller('PrincipalController', PrincipalController)
		.controller('PruebasController', PruebasController)
		.controller('CamarasController', CamarasController)
		//Recoge las measures y las ordena en el orden elegido
		.controller('AsideLeftController', AsideLeftController)
		//Envía las orders y las ordena en el orden elegido
		.controller('AsideRightController', AsideRightController)
		//Recoge los datos de los sensores atmosfericos, los une en JSON y hace las formulas correspondientes.
		.controller('AtmosphericSensorsController', cbAtmosphericSensorsController);


	//CONTROLADORES QUE DEFINEN EL ORDEN DE LOS ELEMENETOS, ESTABLECIDOS POR ROL X.
	function PrincipalController(){

	}

	function PruebasController(){

	}

	function CamarasController(){

	}

	function AsideLeftController($scope, AtmosphericSensors){

		$scope.atmosphericMeasures = [];
		$scope.maritimeMeasures = [];

		//Atmospherics measures
		//TODO: recorrer el array measures de la factoría AtmosphericsSensors y asignar la data.
		//TODO: recoger los sensors ordenados de la configuración y crear el array atmosphericMeasures dinamicamente.
		$scope.atmosphericMeasures.push({
				'name': 'viento',
				'imageUrl':'images/imagen1.png',
				'data': '¿?',
				'measure':'km/h'
		});
		$scope.atmosphericMeasures.push({
				'name': 'temperatura',
				'imageUrl':'images/imagen2.png',
				'data': '¿?',
				'measure':'º C'
		});
		$scope.atmosphericMeasures.push({
				'name': 'presion',
				'imageUrl':'images/imagen3.png',
				'data': '¿?',
				'measure':'kg cm2'
		});
		$scope.atmosphericMeasures.push({
				'name': 'humedad',
				'imageUrl':'images/imagen4.png',
				'data': '¿?',
				'measure':'%'
		});

		//Maritime measures
		$scope.maritimeMeasures.push({
				'name': 'altura',
				'imageUrl':'images/imagen5.png',
				'data': '¿?',
				'measure':'m'
		});
		$scope.maritimeMeasures.push({
				'name': 'distancia',
				'imageUrl':'images/imagen6.png',
				'data': '¿?',
				'measure':'seg'
		});

	}

	function AsideRightController($scope, OrderActions){
		$scope.orders= [];
		//TODO: Corregir error en $scope que no recoge la Factory, habrá que hacerlo con Service o Provider para pasarle $scope al objeto aquí en la construcción.
		//OrderActions.$scope = $scope; //no parece funcionar
		$scope.orderActions = OrderActions;

		//Ordenes de ensayos
		//TODO: recoger los sensors ordenados de la configuración y crear el array trialOrders dinamicamente.
		$scope.orders.push({
			'name': '% de carga',
			'type' : 1,
			'status': 0,
			'value': 0
	 	});

		$scope.orders.push({
			'name': 'Carena de carga',
			'type': 25,
			'status': 0,
			'value': 0
	 	});

		$scope.orders.push({
			'name': 'Izado de vela',
			'type': 0,
			'status': 0,
			'value': 0
	 	});

		$scope.orders.push({
			'name': 'Inclinación de vela',
			'type': 10,
			'status': 0,
			'value': 0
	 	});

		$scope.orders.push({
			'name': '% de anillo',
			'type': 5,
			'status': 0,
			'value': 0
	 	});

		//Ordenes generales
		//TODO: recoger los sensors ordenados de la configuración y crear el array generalOrders dinamicamente.
		$scope.orders.push({
			'name': '',
			'type' : 101,
			'status': 0,
			'value': 0
	 	});

	}



	function cbAtmosphericSensorsController(AtmosphericsSensors){
		//TODO: Hacer operaciones con los datos que viene en AtmosphericsSensors.sensors y crear un array con measures
		//TODO: Esto podria ser un servicio de tipo Service o Provider en lugar de uno de tipo Factory que usamos de momento.
		console.log(AtmosphericsSensors);
	}

})();
