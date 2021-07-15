//promises (refleja un valor que puede estar disponible ahora, en un futuro o nunca)
const usuarioAutenticado = new Promise((resolve, reject) => {
  const auth = true;

  if (auth) {
    resolve("Usuario autenticado"); //EL PROMISE SE CUMPLE
  } else {
    reject("No se pudo iniciar sesion"); //EL PROMISE NO SE CUMPLE
  }
});
//Si quiero traer el resultado de la promise para, por ejemplo, mostrarlo en la consola, se hace con .then
usuarioAutenticado
  .then(function (resultado) {
    console.log(resultado);
  })
  .catch(function (error) {
    console.log(error);
  });

console.log(usuarioAutenticado); //<fullfilled>: 'Usuario Autenticado'

//En los promises existen 3 valores posibles
//Pending: No se cumplio pero tampoco se rechazo (Esta como en espera)
//Fullfilled: Ya se cumplio
//Rejected: Se rechazo, no se pudo cumplir

// Tambien es valido SIN arrow function
// const usuarioAutenticado = new Promise(function () {
// });
