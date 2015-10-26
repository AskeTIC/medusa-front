(function(){
    "use strict";

    angular
        .module('medusa.services', [])
        .constant('UrlServer', 'http://localhost:3030')
        .factory('sensors', sensors)
        .factory('orders', orders);

        function sensors(UrlServer){

        }

        function orders(UrlServer){

        }

})();
