// This en JS
window.propiedad1 = "Nombre"

//Previamente definimos objetos de esta manera, se conoce como object literal
const reservacion = {
  nombre: "Alan",
  apellido: "Shalem",
  total: 5000,
  pagado: false,
  informacion_mal: function () {
    console.log(
      `El cliente ${nombre} reservó y su cantidad a pagar es ${total}`
    ); //Uncaught ReferenceError ❌, es como si buscara afuera una variable llamada nombre y total
  },
  informacion_bien1: function () {
    console.log(
      `El cliente ${reservacion.nombre} reservó y su cantidad a pagar es ${reservacion.total}`
    ); //Bien a medias,  ✔️❌, es como si buscara afuera una variable llamada nombre y total
  },
  informacion_bien: function () {
    console.log(
      `El cliente ${this.nombre} reservó y su cantidad a pagar es ${this.total}`
    );
  },
};

console.log(reservacion.nombre);
console.log(informacion_bien());
reservacion.informacion_bien1();
reservacion.informacion_mal();

//!OJO: PARA QUE FUNCIONE EL OPERADOR THIS TENGO QUE USAR UNA function(){...} Y NO UNA ARROW FUNCTION, YA QUE EL ARROW FUNCTION HACE REFERENCIA A LA VENTANA GLOBAL (WINDOW)

const objeto1 = {
    propiedad1: 'a',
    metodo1 = () =>{
        console.log(this);
        console.log(`La propiedad1 es ${propiedad1}`)
    }
}

objeto1.metodo1();