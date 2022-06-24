const Pelicula = require('../models/pelicula')

const catalogo = [
  new Pelicula(1111, "Terminator","Accion"),
  new Pelicula(2222, "Rocky","Accion"),
  new Pelicula(3333, "Freddy Krueger","Terror"),
  new Pelicula(4444, "Jason","Terror"),
  new Pelicula(5555, "Depredador2","Accion")
];

const repositorioCatalogo = {
  verCatalogo: () => {
    return catalogo;
  },
  incorporarPelicula: (pelicula) => {
    catalogo.push(pelicula)
  },
  buscarPelicula : function(id){
    return catalogo.map(pel => pel.codigo).indexOf(id);
  },
  pedirPelicula : function (id){
    return catalogo[id];
  },
  eliminarPelicula: (indice) => {
    return catalogo.splice(indice,1);
  },
  alquilarPelicula: (indice) => {
    catalogo[indice].alquilar();
  },
  devolverPelicula: (indice) => {
    catalogo[indice].devolver();
  }
}

module.exports = {
  repositorioCatalogo
}

  