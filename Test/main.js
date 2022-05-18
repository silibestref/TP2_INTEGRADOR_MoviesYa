const { expect } = require("chai");
const { should } = require("chai").should();
const axios = require("axios");
const peliculas = require("../persistencia/peliculas");

describe("MoviesYa!", () => {
  describe("# Rutas", () => {
    it("Conectividad", async () => {
      const response = await axios.get("http://127.0.0.1:3000/")
      expect(response.status).to.equal(200);
    });

    it("Listar Peliculas", async () => {
      const response = await axios.get("http://127.0.0.1:3000/catalogo")
      expect(response.data).to.eql(peliculas);
    });

    
    it("Buscar Pelicula", async () => {
      const codigoPelicula = 4444;
      const msj =  await axios.get('http://127.0.0.1:3000/catalogo/buscarPelicula/' + codigoPelicula);
      expect(msj.data).to.not.equal('Ups, lo siento! Por el momento no tenemos esa pelicula');
    });
    

    it("Agregar Pelicula", async () => {
      const nuevaPelicula =   { codigo: 6666, titulo: "Comando", genero: "Accion"};
      const peliculaAgregada = await axios.post("http://127.0.0.1:3000/catalogo/agregarPelicula/" , nuevaPelicula)
      expect(peliculaAgregada.data).to.include(nuevaPelicula);
    });

    it("Eliminar pelicula", async () => {
      const codigoPelicula = 3333;
      const eliminado =  await axios.delete('http://127.0.0.1:3000/catalogo/eliminarPelicula/' + codigoPelicula);
      eliminado.should.have.property('data').with.lengthOf(1);
    });

    it("Update Pelicula", async () => {
      const codigoPelicula = 4444;
      const msj =  await axios.put('http://127.0.0.1:3000/actualizarPelicula/' + codigoPelicula,  { titulo: "Kill Bill" });
      expect(msj.data).to.eql('Se actualizo registro');
    });

    
  });
});
