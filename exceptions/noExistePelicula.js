class NoExistePeliculaException extends Error {
    constructor(message) {
      super(message);
      this.name = "NoExistePeliculaException";
    }
  }
  
module.exports = NoExistePeliculaException