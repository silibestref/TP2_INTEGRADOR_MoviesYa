const express = require("express");
const app = express.Router();
const peliculas = require('../persistencia/peliculas');
const service = require ('../capa_negocio/servicio')


app.get('/', (req, res) => {
  respuesta = service.catalogoListar();
  res.json(respuesta);
})

app.get('/:codigo', (req, res) => {
  id = Number(req.params.codigo);
  resultado = service.catalogoBuscar(id);
  res.send(resultado)
})

app.post('/', (req, res) => {
  respuesta = service.catalogoAgregar(req.body);
  res.json(respuesta);
})

app.delete('/:codigo', (req, res) => {
  id = Number(req.params.codigo)
  resultado = service.catalogoEliminar(id);
  res.json(resultado)
})

app.put('/:codigo', (req, res) => {
  req.params.codigo = Number(req.params.codigo);
  let msj = 'No se logro actualizar el registro';
  const indice = peliculas.map(pel => pel.codigo).indexOf(req.params.codigo);
  if(indice >= 0){
    peliculas[indice].nombre = req.body.nombre;
    msj = 'Se actualizo registro';
  } 
  res.send(msj)
})

module.exports = app;