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
        .factory('GuideSensors', cbGuideSensors);

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

})();
