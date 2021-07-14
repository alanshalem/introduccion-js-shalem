const producto = {
  nombreProducto: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

const medidas = {
  peso: "1kg",
  medidas: "1m",
};

//¿Como podemos unir esos dos objetos sin agregarle propiedades?
//Usamos el rest o spread operator

const nuevoProducto = { ...producto, ...medidas };

console.log(producto);
console.log(medidas);
console.log(nuevoProducto);
