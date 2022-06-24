const express = require("express");
const { getPeliculasFavoritosController, postPeliculaFavoritosController} =  require ('../controllers/pelicula');
const app = express.Router();



app.get('/', getPeliculasFavoritosController);

app.post('/:codigo', postPeliculaFavoritosController);

module.exports = app;