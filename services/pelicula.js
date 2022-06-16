
const { repositorioCatalogo } = require('../repositories/peliculas');
const { repositorioCarrito } = require('../repositories/carrito');
const MismaPeliculaException = require('../exceptions/mismaPelicula')
const NoExistePeliculaException = require('../exceptions/noExistePelicula')

module.exports = {
    
    catalogoBuscar : function(id){
        let resultado = 'Ups, lo siento! Por el momento no tenemos esa pelicula';
        const indice = repositorioCatalogo.buscarPelicula(id);       
        if(indice >= 0){    
            resultado = repositorioCatalogo.pedirPelicula(indice);
        }
        return resultado;
    },
    catalogoAgregar: function(pelicula){
        const existe = repositorioCatalogo.buscarPelicula(pelicula.codigo);
        if (existe >=  0) {
            console.log()
            throw new MismaPeliculaException(`La pelicula ${pelicula.titulo.toUpperCase()} ya fue ingresada.`);
        }else{
            repositorioCatalogo.incorporarPelicula(pelicula); 
        }

    },    
    catalogoEliminar : function(id){
        const indice = repositorioCatalogo.buscarPelicula(id);  
        let peliculaEliminada = [];
        if(indice >= 0){
            peliculaEliminada = repositorioCatalogo.eliminarPelicula(indice);
        }else{
            throw new NoExistePeliculaException(`La pelicula id (${id}) no se encuentra en el catalogo.`);
        }
        return peliculaEliminada;
    },
    carritoAgregar : function(id) {
        const indice = repositorioCatalogo.buscarPelicula(id);
        if(indice >= 0){
            peli = repositorioCatalogo.pedirPelicula(indice);
            repositorioCarrito.agregarPeliCarito(peli);
            repositorioCatalogo.alquilarPelicula(indice);            
        }
        return repositorioCarrito.mostrarCarrito();
    },
    carritoEliminar : function(id) {
        const indice = repositorioCarrito.buscarPelicula(id);       
        repositorioCatalogo.devolverPelicula(indice);
        let peliculaEliminada = [];
        if(indice >= 0){
            peliculaEliminada =  repositorioCarrito.eliminarPeliCarrito(indice);
        }
        return peliculaEliminada;
    },
    carritoMostrarAlquileres : function() {
        return repositorioCarrito.mostrarCarrito();
    }   
}



