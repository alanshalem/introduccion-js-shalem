//Iteradores
//for loop
console.log(1);
console.log(2);
console.log(3);
console.log(4);
//...

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`El numero actual: ${i} es par.`);
  } else {
    console.log(`El numero ${i} es impar`);
  }
}

//Puedo iterar sobre un array con for.
const carrito = [
  { nombre: "Monitor 20 Pulgadas", precio: 500 },
  { nombre: "Television 50 Pulgadas", precio: 700 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 500 },
  { nombre: "Bocina", precio: 300 },
  { nombre: "Laptop", precio: 800 },
];

for (let i = 0; i < carrito.length(); i++) {
  console.log(`${carrito[i].nombre}`);
}

//while loop
let i = 0;
while (i <= 100) {
  if (i % 2 === 0) {
    console.log(`El numero actual: ${i} es par.`);
  } else {
    console.log(`El numero actual: ${i} es impar.`);
  }

  i++;
}

let j = 0;
while (j < carrito.length()) {
  console.log(carrito[j].nombre);
  j++;
}

//do while loop - se ejecuta al menos una vez aunque la condicion no se cumpla
let k = 0;
do {
  console.log(i);
} while (k < 10);
