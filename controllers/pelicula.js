const { repositorioPeliculas } = require('../repositories/peliculas')
const { carrito } = require('../repositories/carrito')

module.exports = {
    catalogoListar : function(){
        return repositorioPeliculas;
    },
    catalogoBuscar : function(id){
        let resultado = 'Ups, lo siento! Por el momento no tenemos esa pelicula';
        const indice = repositorioPeliculas.map(pel => pel.codigo).indexOf(id);        
        if(indice >= 0){    
            resultado = repositorioPeliculas[indice];
        }
        return resultado;
    },
    catalogoAgregar: function(obj){
        repositorioPeliculas.push(obj)
        return obj;
    },
    catalogoEliminar : function(id){
        const indice = repositorioPeliculas.map(pel => pel.codigo).indexOf(id);
        let peliculaEliminada = [];
        if(indice >= 0){
            peliculaEliminada = repositorioPeliculas.splice(indice,1);
        }
        return peliculaEliminada;
    },

    agregarPelicula : function(id) {
        const indice = repositorioPeliculas.map(pel => pel.codigo).indexOf(id);
        carrito.push(repositorioPeliculas[indice]);
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



