//POO
//Object Constructor y Object Literal

/**OBJECT LITERAL**/
const producto = {
  nombre: "Tablet",
  precio: 500,
};

//ESTO YA NO SE USA! EN 2015 JAVASCRIPT INTRODUJO LAS CLASES
/**OBJECT CONSTRUCTOR**/
function Producto(nombre, precio) {
  //CREO LA CLASE
  this.nombre = nombre;
  this.precio = precio;
}

//¿QUE SON LOS PROTOTYPES?
//SON FUNCIONES QUE ESTAN ASOCIADAS SOLO A UN TIPO DE OBJETO

Producto.prototype.formatearProducto = function () {
  return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
};

const producto2 = new Producto("Monitor Curvo de 50", 5000); //INSTANCIO LA CLASE (CREO EL OBJETO)
const producto3 = new Producto("Laptop", 3000);

console.log(producto2.formatearProducto());

function formatearProducto(producto) {
  return `El producto ${producto.nombre} tiene un precio de: ${producto.precio}`;
}
console.log(formatearProducto(producto2));

console.log(producto2);
console.log(producto3);
