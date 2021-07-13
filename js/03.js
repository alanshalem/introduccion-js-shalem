//Variables con const
//Las variables con const DEBEN iniciar con un valor
const producto = "Audifonos Gamer"; //Iniciar variable y asignarle valor

//const disponible; // !ERROR: Iniciar variable sin valor
const disponible = true; // ¡Esto esta bien
//Javascript es un lenguaje de tipo dinamico, las variables no necesitan tipo (string, boolean, number, array, etc...)
//producto = true; //Esto es posible en javascript, reasignamos el valor de la variable, antes producto era un string, pero ahora es un booleano.

// disponible = true;

const producto1 = "Computadora",
  disponible1 = true,
  categoria = "Computadoras";
//Inicializamos multiples variables en una sola linea.

//let 1disponible; //La sintaxis no es valida, las variables no pueden iniciar con numeros
//let -disponible; //La sintaxis no es valida, las variables no pueden iniciar con guion medio (-)
const _disponible = true; //La sintaxis es valida, las variables pueden iniciar con guion bajo (_)

//Estilos para nombrar las variables
const nombre_producto = "Monitor HD"; //under_score o snake_case
const nombreProducto = "Monitor HD"; //camelCase
const NombreProducto = "Monitor HD"; //PascalCase (se utiliza al crear clases)
const nombreproducto = "Monitor HD"; //lowercase

//Las variables son case sensitive

console.log(producto); // != console.log(PRODUCTO)
