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
		.controller('AsideRightController', AsideRightController);

	function PrincipalController(){

	}

	function PruebasController(){

	}

	function CamarasController(){

	}

	function AsideLeftController(AtmosphericsSensors){
		this.atmosphericMeasures = [];
		this.maritimeMeasures = [];

	    //Atmospherics measures
		//TODO: recorrer el array measures de la factoría AtmosphericsSensors
		//y con el name crear el indice, con imageURL, data y measure el resto.
	    this.atmosphericsMeasures['viento'] = {
	        'imageUrl':'images/imagen1.png',
	        'data': AtmosphericsSensors.measures['viento'].data || '¿?',
	        'measure':'km/h',
	        'class':'left-red'
		};
		this.atmosphericsMeasures['temperatura'] = {
			'imageUrl':'images/imagen2.png',
	        'data': AtmosphericsSensors.measures['temperatura'].data || '¿?',
	        'measure':'º C',
	        'class':'left-green'
		};
		this.atmosphericMeasures['presion'] = {
			'imageUrl':'images/imagen3.png',
	        'data':AtmosphericsSensors.measures['presion'].data || '¿?',
	        'measure':'km/h',
	        'class':'left-red'
		];
		this.atmosphericsMeasures['humedad'] = {
	        'imageUrl':'images/imagen4.png',
	        'data': AtmosphericsSensors.measures['humedad'].data || '¿?',
	        'measure':'kg cm2',
	        'class':'left-green'
	    }

	    //Maritime measures
	    this.maritimeMeasures['altura'] = {
	        'imageUrl':'images/imagen5.png',
	        'data': AtmosphericsSensors.measures['altura'].data || '¿?',
	        'measure':'m',
	        'class':'left-red'
	    };
		this.maritimeMeasures['distancia'] = {
	        'imageUrl':'images/imagen6.png',
	        'data': AtmosphericsSensors.measures['distancia'].data || '¿?',
	        'measure':'seg',
	        'class':'left-green'
	    }

	}

	function AsideRightController(){
		this.trialOrders= [];
		this.generalOrders = [];
	}

})();
