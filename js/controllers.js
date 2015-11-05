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
		.controller('AtmosphericsSensorsController', cbAtmosphericsSensorsController);

	function PrincipalController(){

	}

	function PruebasController(){

	}

	function CamarasController(){

	}

	function AsideLeftController(AtmosphericsSensors){
		this.atmosphericMeasures = [];
		this.maritimeMeasures = [];
		//$scope.sensors = AtmosphericsSensors.data;

		//Atmospherics measures
		//TODO: recorrer el array measures de la factoría AtmosphericsSensors
		//y con el atributo -name- crear el indice, con imageURL, data y measure el resto.
		this.atmosphericMeasures.push({
				'name': 'viento',
				'imageUrl':'images/imagen1.png',
				'data': '¿?',
				'measure':'km/h'
		}) ;
		this.atmosphericMeasures.push({
				'name': 'temperatura',
				'imageUrl':'images/imagen2.png',
				'data': '¿?',
				'measure':'º C'
		});
		this.atmosphericMeasures.push({
				'name': 'presion',
				'imageUrl':'images/imagen3.png',
				'data': '¿?',
				'measure':'kg cm2'
		});
		this.atmosphericMeasures.push({
				'name': 'humedad',
				'imageUrl':'images/imagen4.png',
				'data': '¿?',
				'measure':'%'
		});

		//Maritime measures
		this.maritimeMeasures.push({
				'name': 'altura',
				'imageUrl':'images/imagen5.png',
				'data': '¿?',
				'measure':'m'
		});
		this.maritimeMeasures.push({
				'name': 'distancia',
				'imageUrl':'images/imagen6.png',
				'data': '¿?',
				'measure':'seg'
		});

		console.log(this.atmosphericMeasures);

	}

	function AsideRightController(){
		this.trialOrders= [];
		this.generalOrders = [];
	}

	function cbAtmosphericsSensorsController(AtmosphericsSensors){
		//TODO: Hacer operaciones con los datos que viene en AtmosphericsSensors.sensors y crear un array con measures
		//TODO: Esto podria ser un servicio de tipo Service o Provider en lugar de uno de tipo Factory que usamos de momento.
		console.log(AtmosphericsSensors);
	}

})();
