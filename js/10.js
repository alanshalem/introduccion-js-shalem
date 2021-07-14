//Objetos en JS

const nombreProducto = "Monitor 20 Pulgadas";
const precio = 300;
const disponible = true;

const producto = {
  nombreProducto: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

console.log(producto);

//Sintaxis de punto
console.log(producto.nombreProducto);
console.log(producto.precio);
console.log(producto.disponible);

console.log(producto("precio"));

//Modificar Objetos

//Agregar nuevas propiedades
producto.imagen = "imagen.jpg";
console.log(producto);

//Eliminar propiedades
delete producto.disponible;
console.log(producto);
