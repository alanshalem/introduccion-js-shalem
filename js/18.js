//Funciones con parametros y argumentos

function sumar(numero1 = 0, numero2 = 0) {
  //numero1, 2 son parametros
  console.log(numero1 + numero2);
}
sumar(10, 10); //Argumentos o los valores reales
sumar(3, 3);
sumar(3, 5);
sumar(1, 2);
sumar(1); // !ERROR: NaN, EN ESTE CASO, LE PASO PARAMETROS POR DEFAULT PARA QUE LA FUNCION NO ME DE ERROR

const sumar2 = function (n1, n2) {
  console.log(n1 + n2);
};

sumar2(5, 10);
