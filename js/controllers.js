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


	//CONTROLADORES QUE DEFINEN EL ORDEN DE LOS ELEMENTOS, ESTABLECIDOS POR ROL X.
	function PrincipalController($scope){

			//TODO: Recoger los charts dentro de un Service (probablemente provider),creadas desde la configuración con un provider por cada tipo de chart.
			//TODO: recorrer los charts creados en el provider y ordenarlos según esté indicado en la configuración.

			$scope.charts = [];

			//POSIBLES OBJETOS QUE SE UTILIZARAN COMO CHARTS

/*

dataLabels: {
				enabled: true,
				borderRadius: 5,
				backgroundColor: 'rgba(252, 255, 197, 0.7)',
				borderWidth: 1,
				borderColor: '#AAA',
				y: -6
		},

*/

			//Desplazamiento /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

			var desplazamiento = {

				chartConfig: {
					name:'Desplazamiento',
					options: {
				      chart: {
									type:'line',
									plotBorderWidth: 1,
									plotBorderColor:'#000',
			            plotBackgroundColor: null,
			            plotBackgroundImage: null,
									height: 180,
									marginTop: 50,
									marginBottom: 65,
									marginLeft:40,
									marginRight:40,
									inverted:true
				      },
			        pane: 0,
			        tooltip: {
			            enabled: false
			        }
				  },//fin options
					title: {
							text: '',
							x: 0, //center
							y: 10,
							style:{
									color:'#000'
							}
					},
					xAxis: {
							categories: [''],
							minorTickPosition: 'none',
							minorTickInterval: '100',
							minorTickColor: '#000',
							minorTickLength: 5,
							tickPosition: 'none',
							tickInterval: '100',
            	tickWidth: 0,//ancho de las marcas
            	tickLength: 0,//largo de las marcas

					},
					yAxis: {
							labels: {
									style: {
											color: '#000',
											marginRight:-100
									}
							},
							min:0,
							max:100,
							minorTickPosition: 'none',
							minorTickInterval: '50',
							minorTickColor: '#000',
							minorTickLength: 0,
							tickPosition: 'outside',
							tickInterval: '50',
            	tickWidth: 0,//ancho de las marcas
            	tickLength: 0,//largo de las marcas
							offset:-8,
							title:{
								enabled:false
							}
					},
					legend:{
						enabled:false,
					},
					tooltip:{
						enabled:false
					},
					series: [{
            data: [[0, 0], [10, 0]],
						showInLegend: false,
						color:'#000',
						marker: {
								enabled: false
						},
						enableMouseTracking: false
        	}],
					func: function (chart) {//esta funcion que podría servir para los intervals funciona
				   //setup some logic for the chart
					 //alert("funciona");
					 setInterval(function () {
                if (chart.series) { // the chart may be destroyed
                    var left = chart.series[0].points[0],
												right = chart.series[0].points[1],
                        leftVal,rightVal,
                        inc1 = (Math.random()) * 100,
		                    leftVal = inc1;
		                    rightVal = inc1;
		                    if ((leftVal < 0 || leftVal > 100) && (rightVal < 0 || rightVal > 100)){
		                        leftVal = inc1;
														rightVal = inc1;
		                    }
												left.update(leftVal, false);
												right.update(rightVal, false);
												chart.redraw();
		                }
		            }, 500);
				  }

				}//fin chartconfig


			}//fin Desplazamiento

			$scope.charts['desplazamiento.chartConfig.name'] = desplazamiento;
			$scope.charts['desplazamiento.chartConfig.name'].chartConfig.title.text = desplazamiento.chartConfig.name;

			//Carga en bodega /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

			var cargaBodega = {

				chartConfig: {
					name:'Carga en bodega',
					options: {
				      chart: {
									plotBorderWidth: 1,
									plotBorderColor:'#000',
			            plotBackgroundColor: null,
			            plotBackgroundImage: null,
									height: 180,
									backgroundColor:null,
									marginTop: 65,
									marginBottom: 50,
									marginLeft:40,
									marginRight:40
				      },
			        pane: 0,
			        tooltip: {
			            enabled: false
			        }
				  },//fin options
					title: {
							text: '',
							x: 0, //center
							y: 10,
							style:{
									color:'#000'
							}
					},
					xAxis: {
							categories: ['',''],
							minorTickPosition: 'none',
							minorTickInterval: '100',
							minorTickColor: '#000',
							minorTickLength: 5,
							tickPosition: 'none',
							tickInterval: '100',
            	tickWidth: 0,//ancho de las marcas
            	tickLength: 0,//largo de las marcas
					},
					yAxis: {
							labels: {
									style: {
											color: '#000',
											marginRight:-100
									}
							},
							min:0,
							max:100,
							minorTickPosition: 'none',
							minorTickInterval: '50',
							minorTickColor: '#000',
							minorTickLength: 0,
							tickPosition: 'outside',
							tickInterval: '50',
            	tickWidth: 0,//ancho de las marcas
            	tickLength: 0,//largo de las marcas
							offset:-8,
							title:{
								enabled:false
							}
					},
					legend:{
						enabled:false
					},
					tooltip:{
						enabled:false
					},
					series: [{
            data: [[0, 0], [10, 0]],
						showInLegend: false,
						color:'#000',
						marker: {
								enabled: false
						},
						enableMouseTracking: false
        	}],
					func: function (chart) {//esta funcion que podría servir para los intervals funciona
				   //setup some logic for the chart
					 //alert("funciona");
					 setInterval(function () {
                if (chart.series) { // the chart may be destroyed
                    var left = chart.series[0].points[0],
												right = chart.series[0].points[1],
                        leftVal,rightVal,
                        inc1 = (Math.random()) * 100,
		                    leftVal = inc1;
		                    rightVal = inc1;
		                    if ((leftVal < 0 || leftVal > 100) && (rightVal < 0 || rightVal > 100)){
		                        leftVal = inc1;
														rightVal = inc1;
		                    }
												left.update(leftVal, false);
												right.update(rightVal, false);
												chart.redraw();
		                }
		            }, 500);
				  }

				}//fin chartconfig

			}//fin cargaBodega

			$scope.charts['cargaBodega.chartConfig.name'] = cargaBodega;
			$scope.charts['cargaBodega.chartConfig.name'].chartConfig.title.text = cargaBodega.chartConfig.name;

			//Carga en cubierta /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

			var cargaCubierta = {

				chartConfig: {
					name:'Carga en cubierta',
					options: {
				      chart: {
									plotBorderWidth: 1,
									plotBorderColor:'#000',
			            plotBackgroundColor: null,
			            plotBackgroundImage: null,
									height: 180,
									backgroundColor:null,
									marginTop: 65,
									marginBottom: 50,
									marginLeft:40,
									marginRight:40
				      },
			        pane: 0,
			        tooltip: {
			            enabled: false
			        }
				  },//fin options
					title: {
							text: '',
							x: 0, //center
							y: 10,
							style:{
									color:'#000'
							}
					},
					xAxis: {
							categories: ['',''],
							minorTickPosition: 'none',
							minorTickInterval: '100',
							minorTickColor: '#000',
							minorTickLength: 5,
							tickPosition: 'none',
							tickInterval: '100',
            	tickWidth: 0,//ancho de las marcas
            	tickLength: 0,//largo de las marcas
					},
					yAxis: {
							labels: {
									style: {
											color: '#000',
											marginRight:-100
									}
							},
							min:0,
							max:100,
							minorTickPosition: 'none',
							minorTickInterval: '50',
							minorTickColor: '#000',
							minorTickLength: 0,
							tickPosition: 'outside',
							tickInterval: '50',
            	tickWidth: 0,//ancho de las marcas
            	tickLength: 0,//largo de las marcas
							offset:-8,
							title:{
								enabled:false
							}
					},
					legend:{
						enabled:false
					},
					tooltip:{
						enabled:false
					},
					series: [{
            data: [[0, 0], [10, 0]],
						showInLegend: false,
						color:'#000',
						marker: {
								enabled: false
						},
						enableMouseTracking: false
        	}],
					func: function (chart) {//esta funcion que podría servir para los intervals funciona
				   //setup some logic for the chart
					 //alert("funciona");
					 setInterval(function () {
                if (chart.series) { // the chart may be destroyed
                    var left = chart.series[0].points[0],
												right = chart.series[0].points[1],
                        leftVal,rightVal,
                        inc1 = (Math.random()) * 100,
		                    leftVal = inc1;
		                    rightVal = inc1;
		                    if ((leftVal < 0 || leftVal > 100) && (rightVal < 0 || rightVal > 100)){
		                        leftVal = inc1;
														rightVal = inc1;
		                    }
												left.update(leftVal, false);
												right.update(rightVal, false);
												chart.redraw();
		                }
		            }, 500);
				  }

				}//fin chartconfig


			}//fin cargaCubierta

			$scope.charts['cargaCubierta.chartConfig.name'] = cargaCubierta;
			$scope.charts['cargaCubierta.chartConfig.name'].chartConfig.title.text = cargaCubierta.chartConfig.name;

			//Torque /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

			//Consumo /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			var consumo = {
				chartConfig: {
					name: "Consumo",
				  options: {
				      chart: {
				          type: 'gauge',
									plotBorderWidth: 0,
			            plotBackgroundColor: null,
			            plotBackgroundImage: null,
			            height: 185,
									marginTop: -50
				      },
			        pane: [{
			            startAngle: -90,
			            endAngle: 90,
			            background: null,
			            center: ['24%', '90%'],
			            size: 120,

			        }, {
			            startAngle: -90,
			            endAngle: 90,
			            background: null,
			            center: ['76%', '90%'],
			            size: 120
			        }],

			        tooltip: {
			            enabled: false
			        },
			        plotOptions: {
			            gauge: {
			                dataLabels: {
			                    enabled: true,
													formatter: function () {
									        		return Highcharts.numberFormat(this.y,0)+' W';//y es el eje y el 0 el número de decimales
									    		},
													y:-35
			                },
			                dial: {//el largo de la aguja
			                    radius: '115%'
			                },
											style:{
												textShadow: false,
												color:'#fff',
												backgroundColor:'#000'

											}
			            }
			        }
				  },//fin options
					title: {//titulo general de la gráfica
							text: '',
							style:{
								color:'#000'
							}
					},
					yAxis: [{
							min: 0,
							max: 160,
							minorTickPosition: 'outside',
							minorTickInterval: 'auto',
							minorTickColor: '#000',
							minorTickLength: 5,
							tickPosition: 'outside',
							tickInterval: '40',
            	tickWidth: 2,//ancho de las marcas
            	tickLength: 7,//largo de las marcas
            	tickColor: '#000',
							offset:5,
							labels: {
									//rotation: 'auto',
									distance: 2,
									y:-9,
									style:{
										'color':'#000',
									}
							},
							plotBands: [{
									from: 0,
									to: 104,
									color: '#008000',
									innerRadius: '90%',
									outerRadius: '108%'
								},
								{
									from: 104,
									to: 120,
									color: '#FFA500',
									innerRadius: '90%',
									outerRadius: '108%'
								},
								{
									from: 120,
									to: 160,
									color: '#C02316',
									innerRadius: '90%',
									outerRadius: '108%'
								}
							],
							pane: 0,
							title: {
									text: 'Motor<br/><span style="font-size:11px">Achique</span>',
									y: -77,
									style:{
										color:'#000'
									}
							}
					}, {
							min: 0,
							max: 160,
							minorTickPosition: 'outside',
							minorTickInterval: 'auto',
							minorTickColor: '#000',
							minorTickLength: 5,
							tickPosition: 'outside',
							tickInterval: '40',
							tickWidth: 2,//ancho de las marcas
							tickLength: 7,//largo de las marcas
							tickColor: '#000',
							offset:5,
							labels: {
									//rotation: 'auto',
									distance: 2,
									y:-9,
									style:{
										'color':'#000',

									},
							},
							plotBands: [{
									from: 0,
									to: 104,
									color: '#008000',
									innerRadius: '90%',
									outerRadius: '108%'
								},
								{
									from: 104,
									to: 120,
									color: '#FFA500',
									innerRadius: '90%',
									outerRadius: '108%'
								},
								{
									from: 120,
									to: 160,
									color: '#C02316',
									innerRadius: '90%',
									outerRadius: '108%'
								}
							],
							pane: 1,
							title: {
									text: 'Motor<br/><span style="font-size:11px">Nivelación</span>',
									y: -77,
									style:{
										color:'#000'
									}
							}
					}],
					legend: {
            enabled: false
        	},
					series: [{
									name: 'Motor Achique',
									data: [0],
									yAxis: 0
							}, {
									name: 'Motor Nivelación',
									data: [0],
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
                        inc1 = (Math.random()) * 160,
												inc2 = (Math.random()) * 160;
		                    leftVal = inc1;
		                    rightVal = inc2;
		                    if (leftVal < 0 || leftVal > 160) {
		                        leftVal = inc1;
		                    }
		                    if (rightVal < 0 || rightVal > 160) {
		                        rightVal = inc2;
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

			//% de aplicación de recursos /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

			//Reloj  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
					name: "Comparativa Escora Nivelado",
					options: {
				      chart: {
				          type: 'gauge',
									plotBorderWidth: 0,
			            plotBackgroundColor: null,
			            plotBackgroundImage: null,
									marginTop:-250,
									marginBottom:60
				      },
							plotOptions: {
			            gauge: {
			                dataLabels: {
			                    enabled: true,
													formatter: function () {
									        		return Highcharts.numberFormat(this.y,0)+" º";//y es el eje y el 0 el número de decimales
									    		},
													y:65,
			                },
			                dial: {//el largo de la aguja
			                    radius: '88%',
													rearLength: '98%',//La parte de atrás de la aguja
													style:{
														backgroundColor:'white'
													}
			                },
											style:{
												textShadow: false,
												color:'#fff',
												backgroundColor:'#000'

											}
			            }
			        },
			        pane: [{
			            startAngle: -90,
			            endAngle: 90,
			            background: null,
			            center: ['16.5%', '90%'],
			            size: 80,
									marginBottom:-50,
									borderWidth:1
			        }, {
			            startAngle: -90,
			            endAngle: 90,
			            background: null,
			            center: ['50%', '90%'],
			            size: 80
			        },
							{
			            startAngle: -90,
			            endAngle: 90,
			            background: null,
			            center: ['83.5%', '90%'],
			            size: 80
			        }
							],
			        tooltip: {
			            enabled: false
			        },
				  },//fin options
					title: {//titulo general de la gráfica
							text: '',
							style:{
								color:'#000'
							}
					},
					xAxis:{
						min: 0,
						max: 1,
						gridLineeColor:'#000'
					},
					yAxis: [{
							min: 0,
							max: 180,
							lineWidth: 0,
					    minorGridLineWidth: 0,
					    lineColor: 'transparent',
							minorTickPosition: 'outside',
							minorTickInterval: 'auto',
							minorTickColor: '#000',
							minorTickLength: 0,
							tickPosition: 'outside',
							tickInterval: 'auto',
            	tickWidth: 0,//ancho de las marcas
            	tickLength: 0,//largo de las marcas
            	tickColor: '#000',
							offset:5,
							labels: {
									rotation: 'auto',
									distance: 2,
									y:-9,
									style:{
										'color':'#000'
									}
							},
							plotBands: [{
									from: 0,
									to: 140,
									color: '#008000',
									innerRadius: '0%',
									outerRadius: '0%'
								},
								{
									from: 140,
									to: 160,
									color: '#FFA500',
									innerRadius: '0%',
									outerRadius: '0%'
								},
								{
									from: 160,
									to: 180,
									color: '#C02316',
									innerRadius: '0%',
									outerRadius: '0%'
								}
							],
							pane: 0,
							title: {
									text: 'Anillo<br/><span style="font-size:11px"></span>',
									y: -23,
									style:{
										color:'#000'
									}
							}
					}, {
						min: 0,
						max: 180,
						lineWidth: 0,
						minorGridLineWidth: 0,
						lineColor: 'transparent',
						minorTickPosition: 'outside',
						minorTickInterval: 'auto',
						minorTickColor: '#000',
						minorTickLength: 0,
						tickPosition: 'outside',
						tickInterval: 'auto',
						tickWidth: 0,//ancho de las marcas
						tickLength: 0,//largo de las marcas
						tickColor: '#000',
						offset:5,
						labels: {
								rotation: 'auto',
								distance: 2,
								y:-9,
								style:{
									'color':'#000',
									'display':'none'
								}
						},
						plotBands: [{
								from: 0,
								to: 140,
								color: '#008000',
								innerRadius: '0%',
								outerRadius: '0%'
							},
							{
								from: 140,
								to: 160,
								color: '#FFA500',
								innerRadius: '0%',
								outerRadius: '0%'
							},
							{
								from: 160,
								to: 180,
								color: '#C02316',
								innerRadius: '0%',
								outerRadius: '0%'
							}
						],
							pane: 1,
							title: {
									text: 'Ola<br/><span style="font-size:11px"></span>',
									y: -23,
									style:{
										color:'#000'
									}
							}
					},
					{
						min: 0,
						max: 180,
						lineWidth: 0,
						minorGridLineWidth: 0,
						lineColor: 'transparent',
						minorTickPosition: 'outside',
						minorTickInterval: 'auto',
						minorTickColor: '#000',
						minorTickLength: 0,
						tickPosition: 'outside',
						tickInterval: 'auto',
						tickWidth: 0,//ancho de las marcas
						tickLength: 0,//largo de las marcas
						tickColor: '#000',
						offset:5,
						labels: {
								rotation: 'auto',
								distance: 2,
								y:-9,
								style:{
									'color':'#000',
									'display':'none'
								}
						},
						plotBands: [{
								from: 0,
								to: 140,
								color: '#008000',
								innerRadius: '0%',
								outerRadius: '0%'
							},
							{
								from: 140,
								to: 160,
								color: '#FFA500',
								innerRadius: '0%',
								outerRadius: '0%'
							},
							{
								from: 160,
								to: 180,
								color: '#C02316',
								innerRadius: '0%',
								outerRadius: '0%'
							}
						],
							pane: 2,
							title: {
									text: 'Cubierta<br/><span style="font-size:11px"></span>',
									y: -23,
									style:{
										color:'#000'
									}
							}
					}
					],
					legend: {
            enabled: false
        	},
					series: [{
									name: 'Primer gauge',
									data: [0],
									yAxis: 0,
									dial: {//Aquí podemos modificar realmente los valores del dial
							      backgroundColor: 'black',
							      borderColor: 'black',
										borderWidth:4
							    }
							}, {
									name: 'Segundo gauge',
									data: [0],
									yAxis: 1,
									dial: {//Aquí podemos modificar realmente los valores del dial
							      backgroundColor: 'black',
							      borderColor: 'black',
										borderWidth:4
							    }
							},
							{
									name: 'Tercer gauge',
									data: [0],
									yAxis: 2,
									dial: {//Aquí podemos modificar realmente los valores del dial
							      backgroundColor: 'black',
							      borderColor: 'black',
										borderWidth:4
							    }
							}
						],
				  //function (optional)
				  func: function (chart) {//esta funcion que podría servir para los intervals funciona
				   //setup some logic for the chart
					 //alert("funciona");
					 setInterval(function () {
                if (chart.series) { // the chart may be destroyed
                    var left = chart.series[0].points[0],
												center = chart.series[1].points[0],
												right2 = chart.series[2].points[0],
                        leftVal,
                        centerVal,
												right2Val,
                        inc1 = (Math.random()) * 180,
												inc2 = (Math.random()) * 180,
												inc3 = (Math.random()) * 180;
		                    leftVal = inc1;
		                    centerVal = inc2;
												right2Val = inc3;
		                    if (leftVal < 0 || leftVal > 180) {
		                        leftVal = inc1;
		                    }
		                    if (centerVal < 0 || centerVal > 180) {
		                        centerVal = inc2;
		                    }
												if (right2Val < 0 || right2Val > 180) {
		                        right2Val = inc3;
		                    }

		                    left.update(leftVal, false);
		                    center.update(centerVal, false);
												right2.update(right2Val, false);
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

			// Sensores de ensayos /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

			var sensoresEnsayo = {
				chartConfig: {
					name: "Sensores de ensayos",
				  options: {
				      chart: {
				          type: 'gauge',
									plotBorderWidth: 0,
			            plotBackgroundColor: null,
			            plotBackgroundImage: null,
			            height: 185,
									marginTop:-222,
									marginBottom:40
				      },
							pane: [{
			            startAngle: -90,
			            endAngle: 90,
			            background: null,
			            center: ['16.5%', '90%'],
			            size: 80
			        }, {
			            startAngle: -90,
			            endAngle: 90,
			            background: null,
			            center: ['50%', '90%'],
			            size: 80
			        },
							{
			            startAngle: -90,
			            endAngle: 90,
			            background: null,
			            center: ['83.5%', '90%'],
			            size: 80
			        }
							],
			        tooltip: {
			            enabled: false
			        },
			        plotOptions: {
			            gauge: {
			                dataLabels: {
			                    enabled: true,
													formatter: function () {
									        		return '00000<br/>00000';//y es el eje y el 0 el número de decimales
									    		},
													y:0,
													style:{
														color:'transparent',
														borderColor:'#000'
													}
			                },
			                dial: {//el largo de la aguja
			                    radius: '118%',
													rearLength: '0%'
			                },
											pivot:{
												radius:1
											},
											style:{
												textShadow: false,
												color:'#fff',
												backgroundColor:'#000'

											}
			            }
			        }
				  },//fin options
					title: {//titulo general de la gráfica
							text: '',
							style:{
								color:'#000'
							}
					},
					yAxis: [{
							min: -90,
							max: 90,
							lineWidth: 0,
					    minorGridLineWidth: 0,
					    lineColor: 'transparent',
							minorTickPosition: 'outside',
							minorTickInterval: 'auto',
							minorTickColor: '#000',
							minorTickLength: 0,
							tickPosition: 'outside',
							tickInterval: 'auto',
            	tickWidth: 0,//ancho de las marcas
            	tickLength: 0,//largo de las marcas
            	tickColor: '#000',
							offset:5,
							labels: {
									rotation: 'auto',
									distance: 2,
									y:-9,
									style:{
										'color':'#000'
									}
							},
							pane: 0,
							title: {
									text: 'Torque<br/><span style="font-size:11px"></span>',
									y: -40,
									style:{
										color:'#000'
									}
							}
					}, {
							min: -90,
							max: 90,
							lineWidth: 0,
					    minorGridLineWidth: 0,
					    lineColor: 'transparent',
							minorTickPosition: 'outside',
							minorTickInterval: 'auto',
							minorTickColor: '#000',
							minorTickLength: 0,
							tickPosition: 'outside',
							tickInterval: 'auto',
            	tickWidth: 0,//ancho de las marcas
            	tickLength: 0,//largo de las marcas
            	tickColor: '#000',
							offset:5,
							labels: {
									rotation: 'auto',
									distance: 2,
									y:-9,
									style:{
										'color':'#000'
									}
							},
							pane: 1,
							title: {
									text: 'Carga punta<br/><span style="font-size:11px"></span>',
									y: -40,
									style:{
										color:'#000'
									}
							}
					}, {
							min: -90,
							max: 90,
							lineWidth: 0,
					    minorGridLineWidth: 0,
					    lineColor: 'transparent',
							minorTickPosition: 'outside',
							minorTickInterval: 'auto',
							minorTickColor: '#000',
							minorTickLength: 0,
							tickPosition: 'outside',
							tickInterval: 'auto',
            	tickWidth: 0,//ancho de las marcas
            	tickLength: 0,//largo de las marcas
            	tickColor: '#000',
							offset:5,
							labels: {
									rotation: 'auto',
									distance: 2,
									y:-9,
									style:{
										'color':'#000'
									}
							},
							pane: 2,
							title: {
									text: 'Carga pistón<br/><span style="font-size:11px"></span>',
									y: -40,
									style:{
										color:'#000'
									}
							}
					}
					],
					legend: {
            enabled: false
        	},
					series: [{
									name: 'Motor1',
									data: [0],
									yAxis: 0
							}/*, {
									name: 'Motor2',
									data: [0],
									yAxis: 1
							},
							{
									name: 'Motor3',
									data: [0],
									yAxis: 2
							}*/
							],
				  //function (optional)
				  func: function (chart) {//esta funcion que podría servir para los intervals funciona
				   //setup some logic for the chart
					 //alert("funciona");
					 setInterval(function () {
                if (chart.series) { // the chart may be destroyed
                    var left = chart.series[0].points[0],
												//center = chart.series[1].points[0],
                        //right = chart.series[2].points[0],
                        leftVal,
												//centerVal,
                        //rightVal,
                        inc1 = ((Math.random()) * 180)-90,
												//inc2 = ((Math.random()) * 180)-90,
												//inc3 = ((Math.random()) * 180)-90;
		                    leftVal = inc1;
												//centerVal = inc2;
		                    //rightVal = inc3;
		                    if (leftVal < -90 || leftVal > 90) {
		                        leftVal = inc1;
		                    }
												/*if (centerVal < -90 || centerVal > 90) {
		                        centerVal = inc1;
		                    }
												if (rightVal < -90 || rightVal > 90) {
		                        rightVal = inc1;
		                    }*/

		                    left.update(leftVal, false);
												/*center.update(centerVal, false);
		                    right.update(rightVal, false);*/
		                    chart.redraw();
		                }
		            }, 500);
				  }
				}//fin chartConfig

			}//fin Consumo

			/*var sensoresEnsayo = {
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

			}//fin sensoresEnsayo*/

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
