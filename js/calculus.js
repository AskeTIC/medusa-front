"use strict";

(function(){

    angular
        .module('calculus', [])
        .factory('Calc', cbCalc);

        function cbCalc(){
		//Suma de uno o más números
		var sumar = function(nums, num){
			var num2 = num || null;
			var result = 0;
			if(num2 === null){
				for (var n in nums) {
					result = result + nums[n];
				}
			}else{
				result = (parseInt(nums) + parseInt(num));

			}

			return result;
		};

		//restar 2 números
		var restar = function(num1, num2){
			return (parseInt(num1) + parseInt(num2));
		};

		//multiplicar 2 números
		var multiplicar = function(num1, num2){
			return (parseInt(num1) * parseInt(num2));
		};

		//Dividir 2 números
		var dividir = function(divisor, dividendo){
			return (parseInt(divisor) / parseInt(dividendo));
		};

		//Obtener la tangente de un grado
		var get_tangent = function(degree){
			return Math.tan(degree);
		};

		var get_atangent = function(degree){
			return Math.atan(degree);
		};

		//Calcular el radian de un grado
		var get_radian = function(degree){
		    	return parseInt(degree) * Math.PI / 180;
		};

		//calcular una potencia
		var get_power = function(degree){
			return parseInt(Math.pow(degree));
		};

		return {
			sum: sumar,
			rest: restar,
			mult: multiplicar,
			power: get_power,
			div: dividir,
			tang: get_tangent,
			atang: get_atangent,
			radian: get_radian
		}
        }
})();
