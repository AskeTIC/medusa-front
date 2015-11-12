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

	//Callbacks de controladores de orders
	function cbOrdersController($scope){
			//TODO: Recorrer los 2 arrays o juntarlos y evaluar si su tipo es mayor de 100... (controlo que sea orden general)
			//recorro el array que me indiquen por parámetro.
			for(var order in $scope.orders){
					if(order.type === 20){
							$scope.orders[order].action = actionOrders.type(20);
					}
					//console.log($scope.order);
			}

			//ASIGNACION DE METODOS PARA AUMENTAR Y DISMMINUIR EL VALOR
			$scope.lessValue = function(order){
					console.log(order.value);
					if(order.value > 0){
						order.value = (order.value - order.type);
						console.log(order.value);
					}
			};

			$scope.plusValue = function(order){
					console.log(order.value);
					if(order.value < 100){
							order.value = (order.value + order.type);
							console.log(order.value);
					}
			};

			//Método para llamar cuando se haga click y cambiar su estatus.
			var delayId;
			$scope.statusChange = function(order){

					if(order.status === 0){
							order.status = 1;
							console.log(order.status);
							delay(5000);
					}else if(order.status === 1){
						order.status = 2;
						delayStop(delayId);
						console.log("clearTimeout ejecutado"+delayId);
						//TODO:Orden de actuación....
						console.log(order.name+"Actuando!!!!!!!");
					}

					function change(){
							console.log("setTimeout ejecutado");
							// Si modificamos desde el backend o desde el controlador por su propia iniciativa
							// el DOM no se entera de que ha cambiado una propiedad asocaida a él, y hay que
							// indicarlo que se refresque con $apply
							$scope.$apply(function(){
									order.status = 0;
									console.log(order.status);
							});
					}

					function delay(time){
							var timeDelay = time || 2000;
							delayId = setTimeout(change, timeDelay);
					}

					function delayStop(delayId){
						clearTimeout(delayId);
						//Parece mostrar el numero de setTimeout que hay en el contexto global, el primero que hacemos es el Nº 14.
						console.log(delayId);
					}

			};


	}

	function cbAtmosphericSensorsController(AtmosphericsSensors){
		//TODO: Hacer operaciones con los datos que viene en AtmosphericsSensors.sensors y crear un array con measures
		//TODO: Esto podria ser un servicio de tipo Service o Provider en lugar de uno de tipo Factory que usamos de momento.
		console.log(AtmosphericsSensors);
	}

})();
