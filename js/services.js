(function(){
    "use strict";

    angular
        .module('medusa.services', [])
        .factory('AtmosphericsSensors', atmosphericsSensors)
        .factory('StrongsSensors', strongsSensors)
        .factory('InclinometersSensors', inclinometersSensors)
        .factory('DistancesSensors', distancesSensors)
        .factory('FlowmetersSensors', flowmetersSensors)
        .factory('MicrowavesSensors', microwavesSensors)
        .factory('ConsumptionsSensors', consumptionsSensors)
        .factory('AnemometersSensors', anemometersSensors)
        .factory('LapCountersSensors', lapCountersSensors)
        .factory('GuidesSensors', guidesSensors);

        function atmosphericsSensors(){
          //creamos el socket client con el namespace de sensors
          var socket = io().connect('http://localhost:3030');
          console.log("desde atmosphericsSensors");
          //creamos el array de datos atmosféricos que devolveremos en la Factory
          var tempSensor = [
            {
              measure: '12',
              date: new Date()
            }
          ];
          console.log(sensors);

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
              data: sensors,
              socket: socket
          };

        }

        function strongsSensors(UrlServer, $websocket){

        }

        function inclinometersSensors(UrlServer, $websocket){

        }

        function distancesSensors(UrlServer, $websocket){

        }

        function flowmetersSensors(UrlServer, $websocket){

        }

        function microwavesSensors(UrlServer, $websocket){

        }

        function consumptionsSensors(UrlServer, $websocket){

        }

        function anemometersSensors(UrlServer, $websocket){

        }

        function lapCountersSensors(UrlServer, $websocket){

        }

        function guidesSensors(UrlServer, $websocket){

        }

})();
