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
		//Controller de Orders
		.controller('OrdersController', cbOrdersController)

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

	function AsideRightController($scope){
		$scope.orders= [];

		//Ordenes de ensayos
		//TODO: recoger los sensors ordenados de la configuración y crear el array trialOrders dinamicamente.
		$scope.orders.push({
			'name': 'porcentajeCarga',
			'type' : 100,
			'status': 0
	 	});

		$scope.orders.push({
			'name': 'carenaCarga',
			'type': 4,
			'status': 0
	 	});

		$scope.orders.push({
			'name': 'manejoVela',
			'type': 0,
			'status': 0
	 	});

		$scope.orders.push({
			'name': 'inclinacionVela',
			'type': 10,
			'status': 0
	 	});

		$scope.orders.push({
			'name': 'porcentajeAnillo',
			'type': 20,
			'status': 0
	 	});

		//Ordenes generales
		//TODO: recoger los sensors ordenados de la configuración y crear el array generalOrders dinamicamente.
		$scope.orders.push({
			'name': '',
			'type' : 101,
			'status': 0
	 	});

	}

	//Callbacks de controladores de orders
	function cbOrdersController($scope){
			//TODO: Recorrer los 2 arrays o juntarlos y evaluar si su tipo es mayor de 100... (controlo que sea orden general)
			//recorro el array que me indiquen por parámetro.
			for(var order in $scope.orders){
					if(order.type === 20){
							$scope.orders[order].action = actionOrders.type(20);
					}
					console.log($scope.order);
			}

			//Método para llamar cuando se haga click y cambiar su estatus.
			$scope.statusChange = function(order){
					if(order.status === 0){
							order.status = 1;
							console.log(order.status);
							setTimeout(change, 2000);
							console.log("setTimeout ejecutado");
					}else if(order.status === 1){
						order.status = 2;
						//Orden de actuación....
						console.log(order.name+"Actuando!!!!!!!");
					}

					function change(){
							if(order.status === 1){
									order.status = 0;
							}
					}

			};




	}

	function cbAtmosphericSensorsController(AtmosphericsSensors){
		//TODO: Hacer operaciones con los datos que viene en AtmosphericsSensors.sensors y crear un array con measures
		//TODO: Esto podria ser un servicio de tipo Service o Provider en lugar de uno de tipo Factory que usamos de momento.
		console.log(AtmosphericsSensors);
	}

})();
