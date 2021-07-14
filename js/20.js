//Metodos de propiedad - Son funciones pero tienen la sintaxis de metodo

const reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciendo Cancion con el ID: ${id}`);
  },
  pausar: function () {
    console.log("Pausando...");
  },
  crearPlaylist: function (nombre) {
    console.log(`Creando la playlist: ${nombre}`);
  },
  reproducirPlaylist: function (nombre) {
    console.log(`Reproduciendo la playlist: ${nombre}`);
  },
};

//Agregando un metodo
reproductor.borrarCancion = function (id) {
  console.log(`Eliminando la cancion: ${id}`);
};

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist("Heavy Metal");
reproductor.reproducirPlaylist("Heavy Metal");
