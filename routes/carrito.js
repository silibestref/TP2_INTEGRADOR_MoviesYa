const express = require("express");
const app = express.Router();
const service = require ('../capa_negocio/servicio')

app.post('/:codigo', function(req,res){
  id = Number(req.params.codigo);
  resultado = service.agregarPelicula(id);
  res.json(resultado);
})

app.delete('/:codigo', function(req,res){
  id = Number(req.params.codigo);
  resultado = service.borrarPelicula(id);
  res.json(resultado);
})

app.get('/alquilar', function(req,res){
  resultado = service.confirmarCarrito();
  res.json(resultado);
})


module.exports = app;