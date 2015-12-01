"use strict";

(function(){

    angular
        .module('calculus', [])
        .factory('Calc', cbCalc);

        function cbCalc(){
		
		//Parsear un string a int o float
		var parse = function(string, parse){
			var result;
			if(parse === "float"){
				result = parseFloat(string);
			}else{
				result = parseInt(string);
			}
			return result;
		};

		//Suma de uno o más números
		var sumar = function(nums, num, number){
			var num2 = num || null;
			var number = number || "float";
			var result = 0;
			if(num2 === null){
				for (var n in nums) {
					result = parse(result, number) + nums[n];
				}
			}else{
				result = (parse(nums, number) + parse(num, number));
			}

			return result;
		};

		//restar 2 números
		var restar = function(num1, num2, number){
			var number = number || "float";
			return (parse(num1, number) - parse(num2, number));
		};

		//multiplicar 2 números
		var multiplicar = function(num1, num2, number){
			var number = number || "float";
			return (parse(num1, number) * parse(num2, number));
		};

		//Dividir 2 números
	    	var dividir = function(divisor, dividendo, number){
			var number = number || "float";
			return (parse(divisor, number) / parse(dividendo, number));
	    	};

		//Obtener la tangente de un grado
		var get_tangent = function(degree, number){
			var number = number || "float";
			return Math.tan(parse(degree, number));
		};

		var get_atangent = function(degree, number){
			var number = number || "float";
			return Math.atan(parse(degree, number));
		};

		//Calcular grados desde radianes
		var get_degree = function(radian, number){
			var number = number || "float";
			return parse(radian, number) * 180 / Math.PI;
		};

		//Calcular el radian de un grado
		var get_radian = function(degree, number){
			var number = number || "int";
		    return parse(degree, number) * Math.PI / 180;
		};

		//calcular una potencia sin decimales
		//TODO: conseguir hacerla con decimales, probablemente hay que hacer un bucle tantas veces como la potencia.
		var get_power = function(degree, power, number){
			var number = number || "int";
			return Math.pow(parse(degree, number), power);
		};

		//raiz cuadrada de un número
		//TODO: Hacer que le pases un número para calcular la raiz cubica o de otro.
		var get_squareRoot = function(num, number){
			var number = number || "int";
			return  Math.sqrt(parse(num, number));
		};

		return {
			sum: sumar,
			rest: restar,
			mult: multiplicar,
			power: get_power,
			div: dividir,
			tang: get_tangent,
			atang: get_atangent,
			radian: get_radian,
			degree: get_degree,
			root2: get_squareRoot
		}
        }
})();
