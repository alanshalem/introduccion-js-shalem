//CLASES

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  formatearProducto() {
    return `El nombre del producto es: ${this.nombre} y su precio ${this.precio}`;
  }

  obtenerPrecio() {
    console.log(this.precio);
  }
}

const producto1 = new Producto("Monitor curvo de 50", 5000);
const producto2 = new Producto("Monitor curvo de 50", 5000);

console.log(producto1);
console.log(producto2);
console.log(producto1.obtenerPrecio());

//Herencia - En este caso, heredo el constructor y los metodos
//!OJO: SI USO extends TENGO QUE CAMBIAR EL CONSTRUCTOR POR super

class Libro extends Producto {
  constructor(nombre, precio, isbn) {
    super(nombre, precio);
    this.isbn = isbn;
  }

  formatearProducto() {
    return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
  }

  obtenerPrecio() {
    super.obtenerPrecio();
    console.log("Y si hay en existencia");
  }
}

const libro1 = new Libro("Javascript la revolucion", 120, "54293721937219");

console.log(libro1.formatearProducto());
console.log(libro1.obtenerPrecio());
