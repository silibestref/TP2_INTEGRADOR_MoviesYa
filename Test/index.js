const { expect } = require("chai");
const { should } = require("chai").should();
const axios = require("axios");
const peliculas = require("../persistencia/peliculas");
const baseURL = 'http://127.0.0.1:3000';

describe("MoviesYa!", () => {
  describe("# Rutas", () => {
    it("Conectividad", async () => {
      const response = await axios.get(baseURL)
      expect(response.status).to.equal(200);
    });

    it("Listar Peliculas", async () => {
      const response = await axios.get(`${baseURL}/catalogo/`);
      expect(response.data).to.eql(peliculas);
    });

    
    it("Buscar Pelicula", async () => {
      const codigoPelicula = 4444;
      const msj =  await axios.get(`${baseURL}/catalogo/${codigoPelicula}`);
      expect(msj.data).to.not.equal('Ups, lo siento! Por el momento no tenemos esa pelicula');
    });
    

    it("Agregar Pelicula", async () => {
      const nuevaPelicula =   { codigo: 6666, titulo: "Comando", genero: "Accion"};
      const peliculaAgregada = await axios.post(`${baseURL}/catalogo/`, nuevaPelicula)
      expect(peliculaAgregada.data).to.include(nuevaPelicula);
    });

    it("Eliminar pelicula", async () => {
      const codigoPelicula = 3333;
      const eliminado =  await axios.delete(`${baseURL}/catalogo/${codigoPelicula}`);
      eliminado.should.have.property('data').with.lengthOf(1);
    });

    it("Update Pelicula", async () => {
      const codigoPelicula = 4444;
      const msj =  await axios.put(`${baseURL}/catalogo/${codigoPelicula}`, { titulo: "Kill Bill" });
      expect(msj.data).to.eql('Se actualizo registro');
    });

    
  });
});
