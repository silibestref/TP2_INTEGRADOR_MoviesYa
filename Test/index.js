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

describe("MoviesYa!", () => {
    it("Conectividad", async () => {
      // const response = await axios.get(baseURL)
      chai.request(app)
        .get('/')
        .end((err,res)=>{
          expect(res.status).to.equal(200);
        })  
    })
});
