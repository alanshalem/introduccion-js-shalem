//Mas metodos de arrays

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

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

// forEach
meses.forEach(function (mes) {
  console.log(mes);
  if (mes == "Marzo") {
    console.log("Marzo si existe");
  }
});

//includes - compruebo si un elemento existe o no en un arreglo
const resultado = meses.includes("Marzo"); //devuelve true
console.log(resultado);
//Ojo! includes no funciona bien con arrays de objetos. Veamos el siguiente ejemplo:
const resultado2 = carrito.includes("Celular"); //devuelve false, aunque en realidad si lo incluye

//some ideal para arreglo de objetos
const resultado3 = carrito.some(function (producto) {
  return producto.nombre === "Celular"; //debo acceder a la propiedad que quiero comprobar para que funcione bien
});
//con arrow function
const resultado4 = carrito.some(
  (producto) => producto.nombre === "Celular" //debo acceder a la propiedad que quiero comprobar para que funcione bien
);

//reduce - sirve, por ejemplo, para calcular el total a pagar
const resultado5 = carrito.reduce(function (total, producto) {
  return total + producto.precio;
}, 0);
//con arrow function
const resultado6 = carrito.reduce(
  (total, producto) => total + producto.precio,
  0
);

//filter - me devuelve todos los elementos de un array que cumplen con cierta condicion
const resultado7 = carrito.filter(function (producto) {
  return producto.precio > 400;
});

const resultado8 = carrito.filter(function (producto) {
  return producto.nombre != "Celular";
});
