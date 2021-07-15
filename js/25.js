//forEach y map - metodos exclusivos de arreglos
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

//forEach
carrito.forEach((producto) => {
  console.log(producto.nombre);
});
//forEach con arrow function
const arreglo1 = carrito.forEach((producto) => producto.nombre); // ❌ MAL, YA QUE forEach NO CREA UN NUEVO ARREGLO
carrito.forEach((producto) => console.log(producto.nombre)); //✔️

//map
const arreglo3 = carrito.map(
  (producto) => `${producto.nombre} - ${producto.precio}`
);

console.log(arreglo1); //undefined ❌

console.log(arreglo3); //✔️

//DATO IMPORTANTE: SI QUEREMOS ITERAR SOBRE UN LISTADO O UN ARREGLO (Y MOSTRARLO EN PANTALLA) UTILIZO FOREACH,
//SI QUIERO CREAR UN NUEVO ARREGLO UTILIZO MAP, EN MAP, ESTA IMPLICITO LA CREACION DE UN NUEVO ARREGLO
