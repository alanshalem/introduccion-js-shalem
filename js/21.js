//Arrow functions - funcionan como las funciones declaradas como expresion
const sumar2 = (n1, n2) => console.log(n1 + n2);

sumar2(5, 10);

const aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);

aprendiendo("Javascript");

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
meses.forEach((mes) => {
  console.log(mes);
  if (mes == "Marzo") {
    console.log("Marzo si existe");
  }
});

//some
const resultado1 = carrito.some((producto) => producto.nombre === "Celular"); //debo acceder a la propiedad que quiero comprobar para que funcione bien
console.log(resultado1);

//reduce
const resultado2 = carrito.reduce(
  (total, producto) => total + producto.precio,
  0
);
console.log(resultado2);

//filter - me devuelve todos los elementos de un array que cumplen con cierta condicion
const resultado7 = carrito.filter((producto) => producto.precio > 400);
console.log(resultado7);

const resultado8 = carrito.filter((producto) => producto.nombre != "Celular");
console.log(resultado8);
