/*
const axios = require("axios");
const baseURL = 'http://127.0.0.1:3000';
*/
const chai = require('chai')
const chaiHttp = require('chai-http')
const { describe } = require('mocha')
const app = require('../index')
const assertArrays = require('chai-arrays');
const { expect } = chai

chai.use(chaiHttp)

describe('#Movies Ya!', () => {

    describe("POST /carrito", () => {
        it('Alquilar pelicula', async ()=>{
            const peli = {codigo:2222, titulo:"Rocky", genero:"Accion"}
            //const respuesta = await axios.post(`${baseURL}/carrito/${peli.codigo}`);
            chai.request(app)
            .post(`/carrito/${peli.codigo}`)
            .end((err,res)=>{
                expect(res.body[0]).to.eql({codigo:2222, titulo:"Rocky", genero:"Accion", estaAlquilada:true})
            })
        })
    }),    
    describe("GET /carrito", () => {
        it("Ver mis alquileres", async () => {
            //const response = await axios.get(`${baseURL}/catalogo/`);
            chai.request(app)
            .get(`/carrito/`)
            .end((err,res)=>{                
                expect(res.body).with.lengthOf(1);
            })    
        });
    }),
    describe("DELETE /carrito", () => {
        it('Devolver pelicula', async ()=>{
             const peli = {codigo:2222, titulo:"Rocky", genero:"Accion"}
            //const respuesta = await axios.delete(`${baseURL}/carrito/${peli.codigo}`);
            chai.request(app)
            .delete(`/carrito/${peli.codigo}`)
            .end((err,res)=>{
                expect(res.body.pop()).to.eql({codigo:2222, titulo:"Rocky", genero:"Accion", estaAlquilada:true})
            })
        })
    })

});


