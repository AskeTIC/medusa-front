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
	function PrincipalController($scope){

			//TODO: Recoger los charts dentro de un Service (probablemente provider),creadas desde la configuración con un provider por cada tipo de chart.
			//TODO: recorrer los charts creados en el provider y ordenarlos según esté indicado en la configuración.

			$scope.charts = [];

			//POSIBLES OBJETOS QUE SE UTILIZARAN COMO CHARTS

			//Desplazamiento  ///////////////////////////////////////////////////////////////////////////////////

			var desplazamiento = {

				chartConfig: {
					name:'Desplazamiento',
					title: {
					text: '',
					x: -20 //center
					},
					xAxis: {
							categories: ['', '']
					},
					yAxis: {
							categories: ['']
					},
					series: [{
							name: 'n',
							data: [7.0, 7.0]
					}]

				}//fin chartconfig


			}//fin Desplazamiento

			$scope.charts['desplazamiento.chartConfig.name'] = desplazamiento;
			$scope.charts['desplazamiento.chartConfig.name'].chartConfig.title.text = desplazamiento.chartConfig.name;

			//Carga en bodega  ///////////////////////////////////////////////////////////////////////////////////

			var cargaBodega = {

				chartConfig: {
					name:'Carga en bodega',
					title: {
					text: '',
					x: -20 //center
					},
					xAxis: {
							categories: ['', '']
					},
					yAxis: {
							categories: ['']
					},
					series: [{
							name: 'n',
							data: [7.0, 7.0]
					}]

				}//fin chartconfig


			}//fin cargaBodega

			$scope.charts['cargaBodega.chartConfig.name'] = cargaBodega;
			$scope.charts['cargaBodega.chartConfig.name'].chartConfig.title.text = cargaBodega.chartConfig.name;

			//Carga en cubierta  ///////////////////////////////////////////////////////////////////////////////////

			var cargaCubierta = {

				chartConfig: {
					name:'Carga en cubierta',
					title: {
					text: '',
					x: -20 //center
					},
					xAxis: {
							categories: ['', '']
					},
					yAxis: {
							categories: ['']
					},
					series: [{
							name: 'n',
							data: [7.0, 7.0]
					}]

				}//fin chartconfig


			}//fin cargaCubierta

			$scope.charts['cargaCubierta.chartConfig.name'] = cargaCubierta;
			$scope.charts['cargaCubierta.chartConfig.name'].chartConfig.title.text = cargaCubierta.chartConfig.name;

			//Torque ///////////////////////////////////////////////////////////////////////////////////
			var torque = {
					chartConfig: {
							"name": "Torque",
							"options": {
									"chart": {
											"type": 'bar'
									}
							},
							"series": [{
									"data": [10, 15, 12, 8, 7]
							}],
							"title": {
									"text": 'Hello'
							},

							"loading": false
					}
			};
			//$scope.charts.push(torque);
			$scope.charts['torque.chartConfig.name'] = torque;
			// Se crea un nuevo elemento en el array $scope.charts, donde tanto el nombre de la posición que ocupa
			// como el título de dicho elemento será el nombre del objeto que se guardará en él.
			$scope.charts['torque.chartConfig.name'].chartConfig.title.text = torque.chartConfig.name;

			//Consumo ///////////////////////////////////////////////////////////////////////////////////
			var consumo = {
				chartConfig: {
					name: "Consumo",
				  options: {
				      chart: {
				          type: 'gauge',
									plotBorderWidth: 0,
			            plotBackgroundColor: '#fff',
			            plotBackgroundImage: null,
			            height: 180
				      },
			        pane: [{
			            startAngle: -45,
			            endAngle: 45,
			            background: null,
			            center: ['27%', '90%'],
			            size: 150
			        }, {
			            startAngle: -45,
			            endAngle: 45,
			            background: null,
			            center: ['77%', '90%'],
			            size: 150
			        }],

			        tooltip: {
			            enabled: false
			        },
			        plotOptions: {
			            gauge: {
			                dataLabels: {
			                    enabled: false
			                },
			                dial: {
			                    radius: '100%'
			                }
			            }
			        }
				  },
					title: {
							text: 'VU meter'
					},
					yAxis: [{
							min: -20,
							max: 6,
							minorTickPosition: 'outside',
							tickPosition: 'outside',
							labels: {
									rotation: 'auto',
									distance: 20
							},
							plotBands: [{
									from: 0,
									to: 6,
									color: '#C02316',
									innerRadius: '100%',
									outerRadius: '105%'
							}],
							pane: 0,
							title: {
									text: 'Motor<br/><span style="font-size:8px">Achique</span>',
									y: -40
							}
					}, {
							min: -20,
							max: 6,
							minorTickPosition: 'outside',
							tickPosition: 'outside',
							labels: {
									rotation: 'auto',
									distance: 20
							},
							plotBands: [{
									from: 0,
									to: 6,
									color: '#C02316',
									innerRadius: '100%',
									outerRadius: '105%'
							}],
							pane: 1,
							title: {
									text: 'Motor<br/><span style="font-size:8px">Nivelación</span>',
									y: -40
					}
					}],
					series: [{
									name: 'Motor Achique',
									data: [-20],
									yAxis: 0
							}, {
									name: 'Motor Nivelación',
									data: [-20],
									yAxis: 1
							}],
				  //function (optional)
				  func: function (chart) {//esta funcion que podría servir para los intervals funciona
				   //setup some logic for the chart
					 //alert("funciona");
					 setInterval(function () {
                if (chart.series) { // the chart may be destroyed
                    var left = chart.series[0].points[0],
                        right = chart.series[1].points[0],
                        leftVal,
                        rightVal,
                        inc = (Math.random() - 0.5) * 3;

		                    leftVal = left.y + inc;
		                    rightVal = leftVal + inc / 3;
		                    if (leftVal < -20 || leftVal > 6) {
		                        leftVal = left.y - inc;
		                    }
		                    if (rightVal < -20 || rightVal > 6) {
		                        rightVal = leftVal;
		                    }

		                    left.update(leftVal, false);
		                    right.update(rightVal, false);
		                    chart.redraw();
		                }
		            }, 500);
				  }
				}//fin chartConfig

			}//fin Consumo

			//$scope.charts.push(consumo);
			$scope.charts['consumo.chartConfig.name'] = consumo;
			// Se crea un nuevo elemento en el array $scope.charts, donde tanto el nombre de la posición que ocupa
			// como el título de dicho elemento será el nombre del objeto que se guardará en él.
			$scope.charts['consumo.chartConfig.name'].chartConfig.title.text = consumo.chartConfig.name;

			//% de aplicación de recursos ///////////////////////////////////////////////////////////////////////////
			var porcentajeRecursos = {
					chartConfig: {
						name: "porcentajeRecursos",
						options: {
								chart: {
										type: 'gauge',
										plotBorderWidth: 0,
										plotBackgroundColor: '#fff',
										plotBackgroundImage: null,
										height: 180
								},
								pane: [{
										startAngle: -45,
										endAngle: 45,
										background: null,
										center: ['27%', '90%'],
										size: 150
								}, {
										startAngle: -45,
										endAngle: 45,
										background: null,
										center: ['77%', '90%'],
										size: 150
								}],

								tooltip: {
										enabled: false
								},
								plotOptions: {
										gauge: {
												dataLabels: {
														enabled: false
												},
												dial: {
														radius: '100%'
												}
										}
								}
						},
						title: {
								text: 'VU meter'
						},
						yAxis: [{
								min: -20,
								max: 6,
								minorTickPosition: 'outside',
								tickPosition: 'outside',
								labels: {
										rotation: 'auto',
										distance: 20
								},
								plotBands: [{
										from: 0,
										to: 6,
										color: '#C02316',
										innerRadius: '100%',
										outerRadius: '105%'
								}],
								pane: 0,
								title: {
										text: '<br/><span style="font-size:8px"></span>',
										y: -40
								}
						}, {
								min: -20,
								max: 6,
								minorTickPosition: 'outside',
								tickPosition: 'outside',
								labels: {
										rotation: 'auto',
										distance: 20
								},
								plotBands: [{
										from: 0,
										to: 6,
										color: '#C02316',
										innerRadius: '100%',
										outerRadius: '105%'
								}],
								pane: 1,
								title: {
										text: '<br/><span style="font-size:8px"></span>',
										y: -40
						}
						}],
						series: [{
										name: 'Channel A',
										data: [-20],
										yAxis: 0
								}, {
										name: 'Channel B',
										data: [-20],
										yAxis: 1
								}]
					}
			};
			//$scope.charts.push(consumo);
			$scope.charts['porcentajeRecursos.chartConfig.name'] = porcentajeRecursos;
			// Se crea un nuevo elemento en el array $scope.charts, donde tanto el nombre de la posición que ocupa
			// como el título de dicho elemento será el nombre del objeto que se guardará en él.
			$scope.charts['porcentajeRecursos.chartConfig.name'].chartConfig.title.text = porcentajeRecursos.chartConfig.name;

			//Reloj
			var reloj = {
					chartConfig: {
							"options": {
									"chart": {
											"type": "bar"
									}
							},
							"series": [{
									data: [10, 15, 12, 8, 7]
							}],
							"title": {
									"text": 'Reloj'
							},
							"loading": false
					}
			};
			//$scope.charts.push(reloj);
			$scope.charts['reloj.chartConfig.name'] = reloj;
			// Se crea un nuevo elemento en el array $scope.charts, donde tanto el nombre de la posición que ocupa
			// como el título de dicho elemento será el nombre del objeto que se guardará en él.
			$scope.charts['reloj.chartConfig.name'].chartConfig.title.text = reloj.chartConfig.name;

			// Comparativa escora nivelado ///////////////////////////////////////////////////////////////////////////
			var comparativaEscoraNivelado = {
				chartConfig: {
					name: "comparativaEscoraNivelado",
				  options: {
				      chart: {
				          type: 'solidgauge',
									plotBorderWidth: 0,
			            plotBackgroundColor: '#fff',
			            plotBackgroundImage: null,
			            height: 180
				      },
			        pane: [{
			            startAngle: -90,
			            endAngle: 90,
			            background: {
										backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
		                innerRadius: '60%',
		                outerRadius: '100%',
		                shape: 'arc'
									},
			            center: ['27%', '90%'],
			            size: 150
			        }, {
			            startAngle: -90,
			            endAngle: 90,
			            background: {
										backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
		                innerRadius: '60%',
		                outerRadius: '100%',
		                shape: 'arc'
									},
			            center: ['77%', '90%'],
			            size: 150
			        }],

			        tooltip: {
			            enabled: false
			        },
			        plotOptions: {
			            gauge: {
			                dataLabels: {
			                    enabled: false
			                },
			                dial: {
			                    radius: '100%'
			                }
			            }
			        }
				  },
					title: {
							text: ''
					},
					yAxis: [{
							min: 0,
							max: 200,
							minorTickPosition: 'outside',
							tickPosition: 'outside',
							labels: {
									rotation: 'auto',
									distance: 20
							},
							plotBands: [{
									from: 0,
									to: 6,
									color: '#C02316',
									innerRadius: '100%',
									outerRadius: '105%'
							}],
							pane: 0,
							title: {
									text: '<br/><span style="font-size:8px">Anillo</span>',
									y: -40
							}
					}, {
							min: -20,
							max: 6,
							minorTickPosition: 'outside',
							tickPosition: 'outside',
							labels: {
									rotation: 'auto',
									distance: 20
							},
							plotBands: [{
									from: 0,
									to: 6,
									color: '#C02316',
									innerRadius: '100%',
									outerRadius: '105%'
							}],
							pane: 1,
							title: {
									text: '<br/><span style="font-size:8px">Ola</span>',
									y: -40
					}
					}],
					series: [{
									name: 'Channel A',
									data: [-20],
									yAxis: 0
							}, {
									name: 'Channel B',
									data: [-20],
									yAxis: 1
							}],
				  //function (optional)
				  func: function (chart) {//esta funcion que podría servir para los intervals funciona
				   //setup some logic for the chart
					 //alert("funciona");
					 setInterval(function () {
                if (chart.series) { // the chart may be destroyed
                    var left = chart.series[0].points[0],
                        right = chart.series[1].points[0],
                        leftVal,
                        rightVal,
                        inc = (Math.random() - 0.5) * 3;

		                    leftVal = left.y + inc;
		                    rightVal = leftVal + inc / 3;
		                    if (leftVal < -20 || leftVal > 6) {
		                        leftVal = left.y - inc;
		                    }
		                    if (rightVal < -20 || rightVal > 6) {
		                        rightVal = leftVal;
		                    }

		                    left.update(leftVal, false);
		                    right.update(rightVal, false);
		                    chart.redraw();
		                }
		            }, 500);
				  }
				}//fin chartConfig

			}//fin comparativaEscoraNivelado

			//$scope.charts.push(consumo);
			$scope.charts['comparativaEscoraNivelado.chartConfig.name'] = comparativaEscoraNivelado;
			// Se crea un nuevo elemento en el array $scope.charts, donde tanto el nombre de la posición que ocupa
			// como el título de dicho elemento será el nombre del objeto que se guardará en él.
			$scope.charts['comparativaEscoraNivelado.chartConfig.name'].chartConfig.title.text = comparativaEscoraNivelado.chartConfig.name;

			// Sensores de ensayos ///////////////////////////////////////////////////////////////////////////
			var sensoresEnsayo = {
				chartConfig: {
					name: "Sensores de ensayos",
				  options: {
				      chart: {
				          type: 'solidgauge',
									plotBorderWidth: 0,
			            plotBackgroundColor: '#fff',
			            plotBackgroundImage: null,
			            height: 180
				      },
			        pane: [{
			            startAngle: -90,
			            endAngle: 90,
			            background: {
										backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
		                innerRadius: '60%',
		                outerRadius: '100%',
		                shape: 'arc'
									},
			            center: ['27%', '90%'],
			            size: 150
			        }, {
			            startAngle: -90,
			            endAngle: 90,
			            background: {
										backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
		                innerRadius: '60%',
		                outerRadius: '100%',
		                shape: 'arc'
									},
			            center: ['77%', '90%'],
			            size: 150
			        }],

			        tooltip: {
			            enabled: false
			        },
			        plotOptions: {
			            gauge: {
			                dataLabels: {
			                    enabled: false
			                },
			                dial: {
			                    radius: '100%'
			                }
			            }
			        }
				  },
					title: {
							text: ''
					},
					yAxis: [{
							min: 0,
							max: 200,
							minorTickPosition: 'outside',
							tickPosition: 'outside',
							labels: {
									rotation: 'auto',
									distance: 20
							},
							plotBands: [{
									from: 0,
									to: 6,
									color: '#C02316',
									innerRadius: '100%',
									outerRadius: '105%'
							}],
							pane: 0,
							title: {
									text: '<br/><span style="font-size:8px">Anillo</span>',
									y: -40
							}
					}, {
							min: -20,
							max: 6,
							minorTickPosition: 'outside',
							tickPosition: 'outside',
							labels: {
									rotation: 'auto',
									distance: 20
							},
							plotBands: [{
									from: 0,
									to: 6,
									color: '#C02316',
									innerRadius: '100%',
									outerRadius: '105%'
							}],
							pane: 1,
							title: {
									text: '<br/><span style="font-size:8px">Ola</span>',
									y: -40
					}
					}],
					series: [{
									name: 'Channel A',
									data: [-20],
									yAxis: 0
							}, {
									name: 'Channel B',
									data: [-20],
									yAxis: 1
							}],
				  //function (optional)
				  func: function (chart) {//esta funcion que podría servir para los intervals funciona
				   //setup some logic for the chart
					 //alert("funciona");
					 setInterval(function () {
                if (chart.series) { // the chart may be destroyed
                    var left = chart.series[0].points[0],
                        right = chart.series[1].points[0],
                        leftVal,
                        rightVal,
                        inc = (Math.random() - 0.5) * 3;

		                    leftVal = left.y + inc;
		                    rightVal = leftVal + inc / 3;
		                    if (leftVal < -20 || leftVal > 6) {
		                        leftVal = left.y - inc;
		                    }
		                    if (rightVal < -20 || rightVal > 6) {
		                        rightVal = leftVal;
		                    }

		                    left.update(leftVal, false);
		                    right.update(rightVal, false);
		                    chart.redraw();
		                }
		            }, 500);
				  }
				}//fin chartConfig

			}//fin sensoresEnsayo

			//$scope.charts.push(consumo);
			$scope.charts['sensoresEnsayo.chartConfig.name'] = sensoresEnsayo;
			// Se crea un nuevo elemento en el array $scope.charts, donde tanto el nombre de la posición que ocupa
			// como el título de dicho elemento será el nombre del objeto que se guardará en él.
			$scope.charts['sensoresEnsayo.chartConfig.name'].chartConfig.title.text = sensoresEnsayo.chartConfig.name;

			//$scope.charts.push(combinada);
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
