
const carrito = [];

const repositorioCarrito = { 

  agregarPeliCarito: function(peli){
    carrito.push(peli);
  },
  eliminarPeliCarrito: function(indice){
    return carrito.splice(indice,1);
  },
  buscarPelicula : function(id){
    return carrito.map(pel => pel.codigo).indexOf(id);
  },
  mostrarCarrito: () => { 
    return carrito;
  },
  estaVacio: ()=>{
    let resultado = false;
    if (carrito.length == 0){
      resultado = true;
    }
    return resultado;
  }
}



module.exports = {
  carrito,repositorioCarrito
}
