const { expect } = require("chai");
const axios = require("axios");
const carrito = require("../persistencia/carrito");
const baseURL = 'http://127.0.0.1:3000';



describe('#Movies Ya!', () => {
    describe('Pruebas de metodos del carrito', () => {
        
        it('Agregar peliculas al carrito', async ()=>{
            const peli = {codigo: 2222,titulo: "Rocky",genero: "Accion",}
            const respuesta = await axios.post(`${baseURL}/carrito/${peli.codigo}`);
            expect(respuesta.data).to.eql([peli]);
        })

        

        it('borrar una pelicula del carrito', async ()=>{
            const peli = {codigo: 2222,titulo: "Rocky",genero: "Accion",}
            const respuesta = await axios.delete(`${baseURL}/carrito/${peli.codigo}`);
            expect(respuesta.data).to.eql([peli]);
        })
        
    });
});