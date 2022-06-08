const servicePelicula = require ('../services/pelicula');
const Pelicula = require('../models/pelicula');

module.exports = {  
    
    getPeliculasCatalogoController: (req,res)=>{
        let respuesta = servicePelicula.catalogoListar();
        res.json(respuesta);
    },
    getPeliculaCatalogoController: (req,res)=>{
        let id = Number(req.params.codigo);
        let resultado = servicePelicula.catalogoBuscar(id);
        res.send(resultado)
    },
    postPeliculaCatalogoController: (req, res)=>{
        const { codigo, titulo, genero } = req.body
        const pelicula = new Pelicula(codigo, titulo, genero)
        try {
            servicePelicula.catalogoAgregar(pelicula);
            res.json(pelicula)
        } 
        catch (error) {
            console.error(error.message); 
        }
    },
    deletePeliculaCatalogoController: (req, res)=>{
        let id = Number(req.params.codigo)
        try {
            let resultado = servicePelicula.catalogoEliminar(id);
            res.json(resultado);
        } 
        catch (error) {
            console.error(error.message);
        }
    },

    postPeliculaCarritoController: (req, res)=>{
        let id = Number(req.params.codigo);
        let resultado = servicePelicula.carritoAgregar(id);
        res.json(resultado);
    },
    deletePeliculaCarritoController: (req, res)=>{
        let id = Number(req.params.codigo);
        let resultado = servicePelicula.carritoEliminar(id);
        res.json(resultado);
    },
    getPeliculasCarritoController: (req,res)=>{
        let resultado = servicePelicula.carritoMostrarAlquileres();
        res.json(resultado);
    }


}