(function () {

  angular.module('medusa.directives', [])

	//DIRECTIVAS PARA ESTRUCTURA
        .directive('asideLeft', function(){
                return{
                        //De tipo elemento
                        restrict: 'E',
                        //Le indicamos la URL
                        templateUrl: 'partials/aside-left.html',
                        controller: 'AsideLeftController'
                };
        })
        .directive('asideRight', function(){
                return{
                        //De tipo elemento
                        restrict: 'E',
                        //Le indicamos la URL
                        templateUrl: 'partials/aside-right.html',
                        controller: 'AsideRightController'
                };
        })
        .directive('mainNav', function(){
                return{
                        //De tipo elemento
                        restrict: 'E',
                        //Le indicamos la URL
                        templateUrl: 'partials/main-nav.html',
                        controller: ''
                };
        });

})();
