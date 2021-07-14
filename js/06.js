//Objeto Math en JS
//Math: Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}

console.log(window.Math.random());
console.log(Math.random());

let resultado = Math.PI;
console.log(resultado);

let resultado2 = Math.round(2.5);
console.log(resultado2);

let resultado3 = Math.ceil(2.2); //Ceil siempre redondea hacia arriba
console.log(resultado3);

let resultado4 = Math.floor(2.1); //Floor siempre redondea hacia abajo
console.log(resultado4);

let resultado5 = Math.sqrt(144); //Raiz cuadrada
console.log(resultado5);

let resultado6 = Math.abs(-200); //abs convierte un numero negativo en positivo
console.log(resultado6);

let resultado7 = Math.min(3, 5, 1, 8, 2, 10); //nos devuelve el minimo numero de un listado
console.log(resultado7);

let resultado8 = Math.max(3, 5, 1, 8, 2, 10); //nos devuelve el maximo numero de un listado
console.log(resultado8);

let resultado9 = Math.floor(Math.random() * 30);
console.log(resultado9);
