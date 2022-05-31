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
    describe('Pruebas del catalogo', () => {

        it("Listar Peliculas", async () => {
            //const response = await axios.get(`${baseURL}/catalogo/`);
            chai.request(app)
            .get(`/catalogo/`)
            .end((err,res)=>{
                expect(res.body).with.lengthOf(5);
            })    
        });
        it("Buscar Pelicula", async () => {
            const codigoPelicula = 4444;
            //const msj = await axios.get(`${baseURL}/catalogo/${codigoPelicula}`);
            chai.request(app)
            .get(`/catalogo/${codigoPelicula}`)
            .end((err,res)=>{
                expect(res.data).to.not.equal('Ups, lo siento! Por el momento no tenemos esa pelicula');
            }) 
        });
        it("Agregar Pelicula", async () => {
            // const nuevaPelicula = { codigo: 6666, titulo: "Comando", genero: "Accion" };
            //const peliculaAgregada = await axios.post(`${baseURL}/catalogo/`, nuevaPelicula)
            chai.request(app)
            .post("/catalogo/")
            .send({
              codigo: 6666,
              titulo: "Comando",
              genero: "Accion"
            })
            .end((err, res) => {
                expect(res.body).to.eql({codigo: 6666, titulo: "Comando", genero: "Accion"})
            })   
        });

        it("Eliminar pelicula", async () => {
            const codigoPelicula = 3333;
            //const eliminado = await axios.delete(`${baseURL}/catalogo/${codigoPelicula}`);
            chai.request(app)
            .delete(`/catalogo/${codigoPelicula}`)
            .end((err,res)=>{
                expect(res.body).with.lengthOf(1)
            })    
        });
        /*
        it("Update Pelicula", async () => {
            const codigoPelicula = 4444;
            //const msj = await axios.put(`${baseURL}/catalogo/${codigoPelicula}`, { titulo: "Kill Bill" });
            chai.request(app)
            .put(`/catalogo/${codigoPelicula}`)
            .send({
                titulo: "Kill Bill" 
              })
            .end((err,res)=>{
                expect(res).to.be.text
            }) 
            
        });
        */
    });
});
