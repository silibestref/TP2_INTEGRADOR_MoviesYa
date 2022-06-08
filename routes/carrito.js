const express = require("express");
const { getPeliculasCarritoController, postPeliculaCarritoController, deletePeliculaCarritoController} =  require ('../controllers/pelicula');
const app = express.Router();

app.get('/', getPeliculasCarritoController);

app.post('/:codigo', postPeliculaCarritoController);

app.delete('/:codigo', deletePeliculaCarritoController);

module.exports = app;