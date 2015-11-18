(function(){
    "use strict";

    angular
        .module('medusa.services', [])
        .factory('AtmosphericSensors', cbAtmosphericSensors)
        .factory('StrongSensors', cbStrongSensors)
        .factory('InclinometerSensors', cbInclinometerSensors)
        .factory('DistanceSensors', cbDistanceSensors)
        .factory('FlowmeterSensors', cbFlowmeterSensors)
        .factory('MicrowaveSensors', cbMicrowaveSensors)
        .factory('ConsumptionSensors', cbConsumptionSensors)
        .factory('AnemometerSensors', cbAnemometerSensors)
        .factory('LapCounterSensors', cbLapCounterSensors)
        .factory('GuideSensors', cbGuideSensors)
        .factory('OrderActions', cbOrderActions);

        function cbAtmosphericSensors(){
          //creamos el socket client con el namespace de sensors
          var socket = io().connect('http://localhost:3030');
          console.log("desde atmosphericSensors");
          //creamos el array de datos atmosféricos que devolveremos en la Factory
          var tempSensor = [
              {
                measure: '12',
                date: new Date()
              }
          ];
          console.log(tempSensor);

          //Cuadno se establezca la conexión....
          socket.on('conexion-realizada', function(msg){
              console.log('Servidor conectado: '+ msg);
          });

          //Cuando lleguen datos del sensor de temperatura....
          socket.on('data-atmospherics', function(data){
              console.log(data);
              sensors.push(data);
          });

          return {
              data: tempSensor,
              socket: socket
          };

        }

        function cbStrongSensors(UrlServer, $websocket){

        }

        function cbInclinometerSensors(UrlServer, $websocket){

        }

        function cbDistanceSensors(UrlServer, $websocket){

        }

        function cbFlowmeterSensors(UrlServer, $websocket){

        }

        function cbMicrowaveSensors(UrlServer, $websocket){

        }

        function cbConsumptionSensors(UrlServer, $websocket){

        }

        function cbAnemometerSensors(UrlServer, $websocket){

        }

        function cbLapCounterSensors(UrlServer, $websocket){

        }

        function cbGuideSensors(UrlServer, $websocket){

        }

        //Calculations Factory
        function cbCalculations(){

        }

        //OrderActions
        function cbOrderActions($timeout){
            /*TODO: Todo se carga 6 veces por que se incluye OrderController en cada article del ng-repeat,
            lo correcto es OrderController abarque a todos los items del bucle, pasarlo todo al AsideRightController o
            que cada order tenga su controller individual.
            */
            console.log("cbOrderActions");

            //ASIGNACION DE METODOS PARA AUMENTAR Y DISMINUIR EL VALOR
            function lessValue(order){
                console.log(order.value);
                if(order.value > 0){
                  order.value = (order.value - order.type);
                  console.log(order.value);
                }
            }

            function plusValue(order){
                console.log(order.value);
                if(order.value < 100){
                    order.value = (order.value + order.type);
                    console.log(order.value);
                }
            }

            //Método para llamar cuando se haga click y cambiar su estatus.
            var delayId;
            function statusChange(order){

                //Si el stado es 0 (verde)...
                if(order.status === 0){
                    //...lo pasamos a 1 (naranja)
                    order.status = 1;
                    //lo mostramos....
                    console.log(order.status);
                    //y lanzamos el timeout
                    delay(5000);
                }else if(order.status === 1){
                  // si el estado es 1 (naranja) lo pasamos a 2 (rojo)
                  order.status = 2;
                  // cancelamos el setTimeout
                  delayStop(delayId);
                  console.log("clearTimeout ejecutado"+delayId);
                  //TODO:Orden de actuación....
                  console.log(order.name+"Actuando!!!!!!!");
                }

                //Funciones de algoritmo
                function delay(time){
                    //Si no nos pasan time será = a 2000.
                    var timeDelay = time || 2000;
                    //El identificativo del setInterval esta fuera por no sobrescribirlo.
                    //cuando se pasen los X segundos llamamos a change()
                    delayId = $timeout(change, timeDelay);
                }

                function delayStop(delayId){
                  //Si nos quieren cancelar el setTimeout, recibimos el identificativo y cancelamos el mismo.
                  $timeout.cancel(delayId);
                  //OJO:Parece mostrar el numero de setTimeout que hay en el contexto global, el primero que hacemos es el Nº 14.
                  console.log(delayId);
                }

                //Función manejadora de setTimeout
                function change(){
                    console.log("setTimeout ejecutado");
                    /* Si modificamos desde el backend o desde el controlador por su propia iniciativa
                    el DOM no se entera de que ha cambiado una propiedad asocaida a él, y hay que
                    indicarlo que se refresque con $apply*/
                    //Ahora con $timeout el mismo llama a $apply y refresca el DOM. 
                    order.status = 0;
                    console.log(order.status);
                }

            }

            return {
                lessValue: lessValue,
                plusValue: plusValue,
                statusChange: statusChange
            }

        }
})();
