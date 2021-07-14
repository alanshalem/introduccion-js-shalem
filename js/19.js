//Funciones que retornan parametros
function sumar(n1, n2) {
  return n1 + n2;
}

sumar(2, 3);
const resultado = sumar(2, 3); //resultado contiene el valor de lo que retorna la funcion
console.log(resultado);

let total = 0;

function agregarCarrito(precio) {
  return (total += precio);
}

function calcularImpuesto(total) {
  return 1.21 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

console.log(total);

const totalAPagar = calcularImpuesto(total);

console.log(`El total a pagar con impuestos es de: $${totalAPagar}`);
