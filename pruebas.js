const axios = require ('axios');


async function Invoke() {
    try {
      const id = 2222;
      const respuesta = await axios.post('http://localhost:3000/carrito/agregarPelicula/'+id);
      console.log(respuesta.data);
  } catch (error) {
    console.error(error);
  }
}


async function Invoke() {
    try {
      const id = 3333;
      const respuesta = await axios.delete('http://localhost:3000/carrito/borrarPelicula/'+id);
      console.log(respuesta.data);
  } catch (error) {
    console.error(error);
  }
}

async function Invoke() {
    try {
      const respuesta = await axios.get('http://localhost:3000/carrito/alquilar');
      console.log(respuesta.data);
  } catch (error) {
    console.error(error);
  }
}

Invoke()