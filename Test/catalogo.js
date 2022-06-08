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
    describe("GET /catalogo", () => {
        it("Lista Peliculas", async () => {
            //const response = await axios.get(`${baseURL}/catalogo/`);
            chai.request(app)
            .get(`/catalogo/`)
            .end((err,res)=>{
                expect(res.body).with.lengthOf(5);
            })    
        });
    }),    
    describe("GET /catalogo/:id", () => {    
        it("Busca Pelicula", async () => {
            const codigoPelicula = 4444;
            //const msj = await axios.get(`${baseURL}/catalogo/${codigoPelicula}`);
            chai.request(app)
            .get(`/catalogo/${codigoPelicula}`)
            .end((err,res)=>{
                expect(res.text).to.not.equal('Ups, lo siento! Por el momento no tenemos esa pelicula');
            }) 
        });
    }),    
    describe("POST /catalogo", () => {   
        it("Agrega Pelicula", async () => {
            // const nuevaPelicula = { codigo: 6666, titulo: "Matrix", genero: "Accion" };
            //const peliculaAgregada = await axios.post(`${baseURL}/catalogo/`, nuevaPelicula)
            chai.request(app)
            .post("/catalogo/")
            .send({
              codigo: 6666,
              titulo: "Matrix",
              genero: "Accion"
            })
            .end((err, res) => {
                expect(res.body).to.eql({codigo: 6666, titulo: "Matrix", genero: "Accion", estaAlquilada:false})
            })   
        });
    }), 
    describe("POST /catalogo", () => {   
        describe("Agrega Pelicula", () => {    
            it("Captura error al intentar insertar pelicula duplicada", async () => {
                // const nuevaPelicula = { codigo: 6666, titulo: "Matrix", genero: "Accion" };
                //const peliculaAgregada = await axios.post(`${baseURL}/catalogo/`, nuevaPelicula)
                chai.request(app)
                .post("/catalogo/")
                .send({
                  codigo: 6666,
                  titulo: "Matrix",
                  genero: "Accion"
                })
                .end((err, res) => {
                    console.log(err)
                    expect(err).to.throw(MismaPeliculaException)
                })   
            });
        })    
    }), 
    describe("DELETE /catalogo/:id", () => {
        it("Elimina pelicula", async () => {
            const codigoPelicula = 3333;
            //const eliminado = await axios.delete(`${baseURL}/catalogo/${codigoPelicula}`);
            chai.request(app)
            .delete(`/catalogo/${codigoPelicula}`)
            .end((err,res)=>{
                expect(res.body).with.lengthOf(1)
            })    
        });
    })
    describe("DELETE /catalogo/:id", () => {
        describe("Elimina pelicula", () => {
            it("Captura error al intentar eliminar pelicula inexistente", async () => {
                const codigoPelicula = 9999;
                //const eliminado = await axios.delete(`${baseURL}/catalogo/${codigoPelicula}`);
                chai.request(app)
                .delete(`/catalogo/${codigoPelicula}`)
                .end((err,res)=>{
                    console.log(err)
                    expect(err).to.throw(NoExistePeliculaException)
                })    
            });
        })
    })  
});
