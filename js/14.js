//Arrays o Arreglos
//Sintaxis 1
const numeros = [10, 20, 30, 40, 50];

console.log(numeros);
console.table(numeros);

//Sintaxis 2
const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo");

console.log(meses);
console.table(meses);

const arreglo = [
  "Hola",
  10,
  true,
  "si",
  null,
  { nombre: "Juan", trabajo: "Programador" },
  [1, 2, 3],
];

console.log(arreglo);

//Acceder a los valores de un arreglos
console.log(numeros[4]);
console.log(numeros[200]); //undefined

//Conocer la extension de un arreglo
console.log(meses.length);

//Si quiero acceder a todos los elementos del arreglo (y no quiero escribir mucho)
//Uso un iterador, codigo que se ejecuta mientras haya elementos en el arreglos

meses.forEach(function (mes) {
  console.log(mes);
});

numeros.forEach(function (numero) {
  console.log(numero);
});

//Agregar elementos a un array, si agrego una posicion que no existe en el arreglo entonces lo crea
//Si en cambio, agarro una posicion existente pisa el dato.
numeros[5] = 60;
numeros[6] = 70;
console.table(numeros);

//Metodos para agregar elementos a un array

//Metodo Push - agrega elementos a un array, siempre al final
numeros.push(60);
console.log(numeros);

numeros.push(70, 80);
console.log(numeros);

//Metodo Unshift - agrega elementos a un array, siempre al principio
numeros.unshift(-10, -20, -30);
console.log(numeros);

//Metodos para eliminar elementos a un array

//Metodo pop - elimina el ultimo elemento del arreglo
meses.pop();
console.log(meses);

//Metodo shift - elimina el primer elemento del arreglo
meses.shift();
console.log(meses);

//Metodo splice - elimina elementos de un array, recibe desde donde y cuantos.
meses.splice(2, 1);
console.log(meses);

//Rest Operator o Spread Operator - es una buena practica ya que se recomienda no usar los arrays originales, siempre copiar su valor.
const nuevoArreglo = [...meses, "Junio"]; //Como ...meses esta primero y "Junio" esta despues, lo agrega al final
const nuevoArreglo = ["Junio", ...meses]; //Como ...meses esta primero y "Junio" esta despues, lo agrega al final

console.log(nuevoArreglo);
