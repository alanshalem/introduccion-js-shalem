//Variables con let
//Las variables con let pueden iniciar con un valor o asignarle el valor despues, igual que con var
let producto = "Audifonos Gamer"; //Iniciar variable y asignarle valor

let disponible; //Iniciar variable sin valor

//Javascript es un lenguaje de tipo dinamico, las variables no necesitan tipo (string, boolean, number, array, etc...)
//producto = true; //Esto es posible en javascript, reasignamos el valor de la variable, antes producto era un string, pero ahora es un booleano.

disponible = true;

let producto1 = "Computadora",
  disponible1 = true,
  categoria = "Computadoras";
//Inicializamos multiples variables en una sola linea.

//let 1disponible; //La sintaxis no es valida, las variables no pueden iniciar con numeros
//let -disponible; //La sintaxis no es valida, las variables no pueden iniciar con guion medio (-)
let _disponible; //La sintaxis es valida, las variables pueden iniciar con guion bajo (_)

//Estilos para nombrar las variables
let nombre_producto = "Monitor HD"; //under_score o snake_case
let nombreProducto = "Monitor HD"; //camelCase
let NombreProducto = "Monitor HD"; //PascalCase (se utiliza al crear clases)
let nombreproducto = "Monitor HD"; //lowercase

//Las variables son case sensitive

console.log(producto); // != console.log(PRODUCTO)
