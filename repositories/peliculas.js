const Pelicula = require('../models/pelicula')

const repositorioPeliculas = [
  new Pelicula(1111, "Terminator","Accion"),
  new Pelicula(2222, "Rocky","Accion"),
  new Pelicula(3333, "Freddy Krueger","Terror"),
  new Pelicula(4444, "Jason","Terror"),
  new Pelicula(5555, "Depresador","Accion")
];

module.exports = {
  repositorioPeliculas
}

  