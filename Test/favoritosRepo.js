const chai = require('chai')
const { describe } = require('mocha')
const { expect } = chai
const spies = require('chai-spies')
chai.use(spies)


const { repositorioFavoritos } = require('../repositories/favoritos');

describe("Test del repositorio de Peliculas Favoritas", () => {  
    it('Probamos el metodo estaVacio', async () => {
        const respuesta = await repositorioFavoritos.estaVacio();
        expect(respuesta).to.be.eql(true) 
    });    
    it('Agregamos una pelicula', async () => {
        const peli = {codigo:2222, titulo:"Rocky", genero:"Accion"}
        const respuesta = await repositorioFavoritos.agregarPelicula(peli);
        expect(respuesta).to.be.eql('Pelicula agregada a la lista de favoritos') 
    })        
})