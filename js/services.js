(function(){
    "use strict";

    angular
        .module('medusa.services', ['ngWebSocket'])
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

        function atmosphericsSensors($websocket){
            var ws = $websocket('ws://localhost:3030');
            var sensors = [];

            ws.onMessage(function(event) {
                console.log('AtmosphericsSensors: ', event);
                var res;
                res = JSON.parse(event.data);
                /*
                try {
                    res = JSON.parse(event.data);
                } catch(e) {
                    res = {'username': 'anonymous', 'message': event.data};
                }
                */
                sensors.push({
                    data : res.data,
                    date : res.date
                });
            });

            ws.onError(function(event) {
              console.log('connection Error', event);
            });

            ws.onClose(function(event) {
              console.log('connection closed', event);
            });

            ws.onOpen(function() {
              console.log('connection open');
              ws.send('Hello World');
              ws.send('again');
              ws.send('and again');
            });

            return {
                measures: sensors
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
