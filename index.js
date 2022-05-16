const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const peliculas = require('./peliculas');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.get('/',(req,res)=>{
    res.sendStatus(200);
})

app.get('/listarPeliculas',(req,res)=>{
  console.log(peliculas);
  res.json(peliculas);
})

app.post('/agregarPelicula', (req, res) => {
  console.log(req.body)
  peliculas.push(req.body)
  res.json(req.body);
})

app.delete('/eliminarPelicula/:codigo', (req, res) => {
  req.params.codigo = Number(req.params.codigo)
  const indice = peliculas.map(pel => pel.codigo).indexOf(req.params.codigo);
  let peliculaEliminada = [];
  if(indice >= 0){
    peliculaEliminada = peliculas.splice(indice,1);
  }
  res.json(peliculaEliminada)
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})