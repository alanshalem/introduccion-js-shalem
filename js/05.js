//Números y Operadores
const nombre = "Alan";

const numero1 = 100;
const numero2 = 200;
const numero3 = 200.2;
const numero4 = 0.102;
const numero5 = -5;
const numero6 = 10;
const numero7 = 3;

console.log(nombre); //Los strings salen en negro en la consola
console.log(numero1); //Los number salen en azul en la consola
console.log(numero2);
console.log(numero3);

console.log(numero1 + numero2);
console.log(numero2 - numero1);
console.log(numero2 * numero1);
console.log(numero2 / numero1);
console.log(numero2 % numero1); //modulo, es el resto de la division
console.log(numero6 % numero7);

const cliente = "Juan";
const cliente2 = "Pablo";

console.log(cliente * cliente2); // !ERROR: NaN (Not a Number) - no puedo multiplicar dos strings
