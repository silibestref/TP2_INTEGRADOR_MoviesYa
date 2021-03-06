const chai = require('chai')
const { describe } = require('mocha')
const { expect } = chai
const spies = require('chai-spies')
chai.use(spies)


const {catalogoAgregar,carritoVacio} = require ('../services/pelicula')
const Pelicula = require('../models/pelicula')
const MismaPeliculaException = require('../exceptions/mismaPelicula')
const ElCarritoEstaVacio = require('../exceptions/carritoVacio')
const {repositorioCatalogo} = require('../repositories/peliculas')

describe("Service Catalogo de Peliculas", () => {
    describe("Metodo agregar pelicula al catalogo", () => {        
        it('probamos regla de validacion: busca la pelicula antes de agregarla', async () => {
            chai.spy.on(repositorioCatalogo,'buscarPelicula')
            const peli = new Pelicula({
                codigo: 8888,
                titulo: "Depredador",
                genero: "Terror"
              })
            catalogoAgregar(peli)       
            expect(repositorioCatalogo.buscarPelicula).to.have.been.called()
        });
        it("lanza una excepción si la pelicula ya existe", () => {
            const peli = new Pelicula({
                codigo: 7777,
                titulo: "Top Gun",
                genero: "Accion"
              })
    
            expect(() => catalogoAgregar(peli)).not.to.throw(MismaPeliculaException)
        });
    })
});
describe("Service Tests sobre el carrito", () => {
    describe("Mostrar lista de peliculas agregadas al carrito", () => {        
        it('probamos regla de validacion: verifica primero si el carrito se encuentre vacio', async () => {
            expect(() => carritoVacio()).to.throw(ElCarritoEstaVacio) 
        })
    })
})