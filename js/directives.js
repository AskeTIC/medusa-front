(function () {

  angular.module('medusa.directives', [])

	//DIRECTIVAS PARA ESTRUCTURA
        .directive('asideLeft', function(){
                return{
                        //De tipo elemento
                        restrict: 'E',
                        //Le indicamos la URL
                        templateUrl: 'partials/aside-left.html',
                        controller: function(){
                                this.measure = {
                                        name : 'temperatura',
                                        data : '34',
                                        date : '12:00:02:04'
                                }

                        }
                        /*controllerAs: 'meCtl'*/
                };
        })
        .directive('asideRight', function(){
                return{
                        //De tipo elemento
                        restrict: 'E',
                        //Le indicamos la URL
                        templateUrl: 'partials/aside-right.html',
                        controller: function(){
                                this.measure = {
                                        name : 'temperatura',
                                        data : '34',
                                        date : '12:00:02:04'
                                }

                        }
                        /*controllerAs: 'meCtl'*/
                };
        })
        .directive('mainContent', function(){
                return{
                        //De tipo elemento
                        restrict: 'E',
                        //Le indicamos la URL
                        templateUrl: 'partials/main.html',
                };
        });

})();
