class MismaPeliculaException extends Error {
    constructor(message) {
      super(message);
      this.name = "MismaPeliculaException";
    }
  }
  
module.exports = MismaPeliculaException