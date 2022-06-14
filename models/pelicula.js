module.exports = function(codigo, titulo, genero) {
    this.codigo = codigo
    this.titulo = titulo
    this.genero = genero
    this.estaAlquilada = false
    this.alquilar = function(){
        this.estaAlquilada = true;
        console.log('se alquilo la pelicula');
    }
    this.devolver = function(){ 
        this.estaAlquilada = false;
        console.log('se devolvio la pelicula');
    }
}