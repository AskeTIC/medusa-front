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

	function AsideLeftController(){
		this.atmosphericMeasures = [];
		this.maritimeMeasures = [];
	}

	function AsideRightController(){
		this.trialOrders= [];
		this.generalOrders = [];
	}

})();
