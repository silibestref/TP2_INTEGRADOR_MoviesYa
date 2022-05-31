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
            const peli = {codigo:2222, titulo:"Rocky", genero:"Accion"}
            //const respuesta = await axios.post(`${baseURL}/carrito/${peli.codigo}`);
            chai.request(app)
            .post(`/carrito/${peli.codigo}`)
            .end((err,res)=>{
                //expect(res.data).to.eql([peli]);
                expect(res.body[0]).to.eql({codigo:2222, titulo:"Rocky", genero:"Accion"})
            })
        })
        
        it('borrar una pelicula del carrito', async ()=>{
             const peli = {codigo:2222, titulo:"Rocky", genero:"Accion"}
            //const respuesta = await axios.delete(`${baseURL}/carrito/${peli.codigo}`);
            chai.request(app)
            .delete(`/carrito/${peli.codigo}`)
            .end((err,res)=>{
                expect(res.body.pop()).to.eql({codigo:2222, titulo:"Rocky", genero:"Accion"})
            })
        })
    });
});

