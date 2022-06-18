class ElCarritoEstaVacio extends Error {
    constructor(message) {
      super(message);
      this.name = "ElCarritoEstaVacio";
    }
  }
  
module.exports = ElCarritoEstaVacio