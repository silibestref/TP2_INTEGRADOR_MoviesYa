const express = require("express");
const { getPeliculasCatalogoController, getPeliculaCatalogoController, postPeliculaCatalogoController, deletePeliculaCatalogoController} =  require ('../controllers/pelicula');
const app = express.Router();

app.get('/', getPeliculasCatalogoController);

app.get('/:codigo', getPeliculaCatalogoController);

app.post('/', postPeliculaCatalogoController);

app.delete('/:codigo', deletePeliculaCatalogoController);

module.exports = app;