//Strings o cadenas de texto
const producto = "Monitor de 20 Pulgadas"; //Forma estandar
const producto2 = String("Monitor 30 pulgadas"); //Forma utilizando un constructor
const producto3 = new String("Monitor 40 pulgadas"); //Forma utilizando un objeto
const productoConComillasSimples = "Monitor 50 pulgadas";
const productoConComillasIncluidas = 'Monitor 60 pulgadas"'; //Puedo escapar la comilla doble usando \ antes

console.log(producto);
console.log(typeof producto);

console.log(producto2);
console.log(typeof producto2);

console.log(producto3);
console.log(typeof producto3);

console.log(productoConComillasSimples);

//Operaciones asociadas a los strings
const texto1 =
  "Hola! Como estas? Espero que estes muy bien, estoy aprendiendo Javascript.";
const texto2 = "Muy bien, gracias.";

//length me devuelve la extension
console.log(texto1.length); // string.length -> .length es una propiedad, no lleva parentesis
console.log(texto2.length);
//indexOf me devuelve la posicion de un string dentro de otro (si existe, sino devuelve -1)
console.log(texto1.indexOf("Javascript")); //Buscamos si el string "Javascript" se
console.log(texto2.indexOf("Tablet"));
//funcion(valor)
//objeto.metodo()

//Includes (retorna true o false)
console.log(texto1.includes("Javascript")); //Buscamos si el string "Javascript" se
console.log(texto2.includes("Tablet"));

//Ej con emails
const email = "correo@example.com";
console.log(email.indexOf("@"));
