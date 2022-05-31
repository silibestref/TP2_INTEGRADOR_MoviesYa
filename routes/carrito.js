const express = require("express");
const app = express.Router();
const servicePelicula = require ('../controllers/pelicula')

app.post('/:codigo', function(req,res){
  id = Number(req.params.codigo);
  resultado = servicePelicula.agregarPelicula(id);
  res.json(resultado);
})

app.delete('/:codigo', function(req,res){
  id = Number(req.params.codigo);
  resultado = servicePelicula.borrarPelicula(id);
  res.json(resultado);
})

app.get('/alquilar', function(req,res){
  resultado = servicePelicula.confirmarCarrito();
  res.json(resultado);
})


module.exports = app;