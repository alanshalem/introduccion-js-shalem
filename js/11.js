//Destructuring de Objetos - ¿Como crear variables a partir de los valores de un objeto?

const producto = {
  nombreProducto: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

//creo la variable    = extraigo el valor;
const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto;
//No pasa nada con que la variable se llame nombreProducto, ya que en realidad la variable es producto, nombreProducto es una propiedad del objeto producto (que es la variable)

console.log(precioProducto);
console.log(nombreProducto);

//Destructuring - creo la variable y extraigo el valor al mismo tiempo
const { precio } = producto;
console.log(precio);

const { nombreProducto } = producto;
console.log(nombreProducto);

//Otra forma para ahorrar codigo, el resultado es el mismo
const { precio, nombreProducto, disponible } = producto;
