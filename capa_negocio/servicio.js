const peliculas = require('../persistencia/peliculas');
const carrito = require ('../persistencia/carrito');

module.exports = {

    catalogoListar : function(){
        return peliculas;
    },

    catalogoBuscar : function(id){
        let resultado = 'Ups, lo siento! Por el momento no tenemos esa pelicula';
        const indice = peliculas.map(pel => pel.codigo).indexOf(id);
        if(indice >= 0){    
            resultado = peliculas[indice];
        }
        return resultado;
    },

    catalogoAgregar: function(obj){
        peliculas.push(obj)
        return obj;
    },

    catalogoEliminar : function(id){
        const indice = peliculas.map(pel => pel.codigo).indexOf(id);
        let peliculaEliminada = [];
        if(indice >= 0){
            peliculaEliminada = peliculas.splice(indice,1);
        }
        return peliculaEliminada;
    },

    agregarPelicula : function(id) {
        const indice = peliculas.map(pel => pel.codigo).indexOf(id);
        carrito.push(peliculas[indice]);
        return carrito;
    },
    borrarPelicula : function(id) {
        const indice = carrito.map(pel => pel.codigo).indexOf(id);
        let peliculaEliminada = [];
        if(indice >= 0){
            peliculaEliminada = carrito.splice(indice,1);
        }
        return peliculaEliminada;
    },
    confirmarCarrito : function() {
        return carrito;
    }

}



