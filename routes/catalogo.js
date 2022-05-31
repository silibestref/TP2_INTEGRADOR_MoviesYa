const express = require("express");
const app = express.Router();
const servicePelicula = require ('../controllers/pelicula')

app.get('/', (req, res) => {
  respuesta = servicePelicula.catalogoListar();
  res.json(respuesta);
})

app.get('/:codigo', (req, res) => {
  let msj;
  const peliculaDisp = 3;
  id = Number(req.params.codigo);
  resultado = servicePelicula.catalogoBuscar(id);
  if(resultado.length === peliculaDisp){
    msj = 'Hoy es tu dia de suerte, la pelicula esta disponible.';
  }else{
    msj = 'Ups, lo siento! Por el momento no tenemos esa pelicula.';
  }
  res.send(msj)
})

app.post('/', (req, res) => {
  respuesta = servicePelicula.catalogoAgregar(req.body);
  res.json(respuesta);
})

app.delete('/:codigo', (req, res) => {
  id = Number(req.params.codigo)
  resultado = servicePelicula.catalogoEliminar(id);
  res.json(resultado)
})
/*
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
*/
module.exports = app;