const express = require("express");
const app = express.Router();
const peliculas = require('../persistencia/peliculas');
const service = require ('../capa_negocio/servicio')


app.get('/',(req,res)=>{
    res.sendStatus(200);
})


/*             CRUD del catalogo              */

app.get('/catalogo',(req,res)=>{
  res.json(service.catalogoListar());
})

app.get('/catalogo/buscarPelicula/:codigo', (req, res) => {
  id = Number(req.params.codigo);
  resultado = service.catalogoBuscar(id);
  console.log(resultado);
  res.send(resultado)
})

app.post('/catalogo/agregarPelicula', (req, res) => {
  respuesta = service.catalogoAgregar(req.body);
  res.json(respuesta);
})

app.delete('/catalogo/eliminarPelicula/:codigo', (req, res) => {
  id = Number(req.params.codigo)
  resultado = service.catalogoEliminar(id);
  res.json(resultado)
})

app.put('/actualizarPelicula/:codigo', (req, res) => {
  req.params.codigo = Number(req.params.codigo);
  let msj = 'No se logro actualizar el registro';
  const indice = peliculas.map(pel => pel.codigo).indexOf(req.params.codigo);
  if(indice >= 0){
    peliculas[indice].nombre = req.body.nombre;
    msj = 'Se actualizo registro';
  } 
  res.send(msj)
})

/*        CRUD en el Carrito       */

app.post('/carrito/agregarPelicula/:codigo', function(req,res){
  id = Number(req.params.codigo);
  resultado = service.agregarPelicula(id);
  res.json(resultado);
})

app.delete('/carrito/borrarPelicula/:codigo', function(req,res){
  id = Number(req.params.codigo);
  resultado = service.borrarPelicula(id);
  res.json(resultado);
})

app.get('/carrito/alquilar', function(req,res){
  resultado = service.confirmarCarrito();
  res.json(resultado);
})


module.exports = app;