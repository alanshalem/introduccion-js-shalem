//"use strict"; //Ejecuto el codigo en forma estricta para que siga buenas practicas.

//Objetos
const producto = {
  nombreProducto: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

//¿Porque puedo modificar el objeto producto si lo declare como const?
//Si quiero evitar que esto suceda tengo que usar una funcion llamada freezes
Object.freeze(producto); //Congelo el objeto, NO ME PERMITE AGREGARLE, ELIMINARLE O MODIFICAR PROPIEDADES.

//¿Como se que un objeto esta freezado? Con el metodo isfrozen
console.log(Object.isFrozen(producto));

//Existe otro metodo que se llama seal que tiene el mismo proposito
Object.seal(producto); //Sello el objeto, NO ME PERMITE AGREGARLE o ELIMINARLE PERO SI MODIFICARLE PROPIEDADES.
console.log(Object.isSealed(producto));

producto.imagen = "imagen.jpg";
console.log(producto);
