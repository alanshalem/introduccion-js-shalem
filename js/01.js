// Variables
// Hay 3 formas de crear variables

var producto = "Audifonos Gamer"; //Iniciar variable y asignarle valor, var ya no se utiliza

var disponible; //Iniciar variable sin valor

//Javascript es un lenguaje de tipo dinamico, las variables no necesitan tipo (string, boolean, number, array, etc...)
//producto = true; //Esto es posible en javascript, reasignamos el valor de la variable, antes producto era un string, pero ahora es un booleano.

disponible = true;

var producto1 = "Computadora",
  disponible1 = true,
  categoria = "Computadoras";
//Inicializamos multiples variables en una sola linea.

//var 1disponible; //La sintaxis no es valida, las variables no pueden iniciar con numeros
//var -disponible; //La sintaxis no es valida, las variables no pueden iniciar con guion medio (-)
var _disponible; //La sintaxis es valida, las variables pueden iniciar con guion bajo (_)

//Estilos para nombrar las variables
var nombre_producto = "Monitor HD"; //under_score o snake_case
var nombreProducto = "Monitor HD"; //camelCase
var NombreProducto = "Monitor HD"; //PascalCase (se utiliza al crear clases)
var nombreproducto = "Monitor HD"; //lowercase

//Las variables son case sensitive

console.log(producto); // != console.log(PRODUCTO)
