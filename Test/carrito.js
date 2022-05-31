/*
const axios = require("axios");
const baseURL = 'http://127.0.0.1:3000';
*/
const chai = require('chai')
const chaiHttp = require('chai-http')
const { describe } = require('mocha')
const app = require('../index')
const { expect } = chai

chai.use(chaiHttp)

describe('#Movies Ya!', () => {
    describe('Pruebas de metodos del carrito', () => {

        it('Agregar peliculas al carrito', async ()=>{
            const peli = {codigo:2222, titulo:"Rocky", genero:"Accion",}
            //const respuesta = await axios.post(`${baseURL}/carrito/${peli.codigo}`);
            chai.request(app)
            .post(`/carrito/${peli.codigo}`)
            .end((err,res)=>{
                //expect(res.data).to.eql([peli]);
                expect(res).to.be.json
            })
        })
        
        it('borrar una pelicula del carrito', async ()=>{
             const peli = {codigo:2222, titulo:"Rocky", genero:"Accion",}
            //const respuesta = await axios.delete(`${baseURL}/carrito/${peli.codigo}`);
            chai.request(app)
            .delete(`/carrito/${peli.codigo}`)
            .end((err,res)=>{
                expect(res).to.be.json
                //expect(res.data).to.eql([peli]);
            })
            
        })
       
    });
});

