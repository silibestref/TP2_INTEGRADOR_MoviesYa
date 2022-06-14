const { catalogo } = require('../repositories/peliculas');
const { carrito } = require('../repositories/carrito');
const MismaPeliculaException = require('../exceptions/mismaPelicula')
const NoExistePeliculaException = require('../exceptions/noExistePelicula')

module.exports = {
    catalogoListar : function(){
        return catalogo;
    },
    catalogoBuscar : function(id){
        let resultado = 'Ups, lo siento! Por el momento no tenemos esa pelicula';
        const indice = this.buscarPelicula(catalogo,id);       
        if(indice >= 0){    
            resultado = catalogo[indice];
        }
        return resultado;
    },
    catalogoAgregar: function(pelicula){
        const existe = this.buscarPelicula(catalogo,pelicula.codigo);
        if (existe >=  0) {
            console.log()
            throw new MismaPeliculaException(`La pelicula ${pelicula.titulo.toUpperCase()} ya fue ingresada.`);
        }else{
            catalogo.push(pelicula); 
        }

    },
    catalogoEliminar : function(id){
        const indice = this.buscarPelicula(catalogo,id); 
        let peliculaEliminada = [];
        if(indice >= 0){
            peliculaEliminada = catalogo.splice(indice,1);
        }else{
            throw new NoExistePeliculaException(`La pelicula id (${id}) no se encuentra en el catalogo.`);
        }
        return peliculaEliminada;
    },
    carritoAgregar : function(id) {
        const indice = this.buscarPelicula(catalogo,id);
        if(indice >= 0){
            carrito.push(catalogo[indice]);
            catalogo[indice].alquilar();
        }
        return carrito;
    },
    carritoEliminar : function(id) {
        const indice = this.buscarPelicula(carrito,id);
        catalogo[indice].devolver();
        let peliculaEliminada = [];
        if(indice >= 0){
            peliculaEliminada = carrito.splice(indice,1);
            
            
        }
        return peliculaEliminada;
    },
    carritoMostrarAlquileres : function() {
        return carrito;
    },
    buscarPelicula : function(listaPeliculas,id){
        return listaPeliculas.map(pel => pel.codigo).indexOf(id);
    }
    

}



