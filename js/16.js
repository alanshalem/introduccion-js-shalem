//Funciones en JS - existen 3 formas de crear funciones, declaracion, expresion y ifi

//1 - DECLARACION DE LA FUNCION
//Creacion de funcion
function sumar() {
  //cuerpo
  console.log(10 + 10);
}
//llamado de funcion
sumar();

//2 - EXPRESION DE LA FUNCION
const sumar2 = function () {
  console.log(3 + 3);
};

sumar2();

//Cual es la direrencia entre la declaracion y la expresion?
//En la declaracion, yo puedo llamar a la funcion lineas antes de crearla, por ejemplo, creo la funcion en la linea 20 pero la llamo en la linea 10, no me da error
//En la expresion, yo NO puedo llamar a la funcion lineas antes de crearla, me da ERROR
//esto se conoce como el HOISTING
//Javascript se ejecuta en dos vueltas, en la primera vuelta se registran todas las funciones y las variables, en la segunda se mandan a llamar.

//IIFE - SE MANDA A LLAMAR A SI MISMA (Sirve mas que nada para proteger que las variables no se mezclen con otro archivo)
(function () {
  const cliente = "Juan"; //El scope de esta variable no sale de esta funcion, es util para cuando por ejemplo importamos librerias que ya tienen variables y no queremos que pisen las nuestras.
  //Por ejemplo, si tuviesemos la variable cliente en otro archivo js, y ese archivo lo llamariamos desde el html, tambien podriamos operar sobre esa otra variable desde otros JS
  console.log("Esto es una funcion");
})();
