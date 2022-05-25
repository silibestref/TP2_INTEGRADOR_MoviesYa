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
    
    
  });
});
