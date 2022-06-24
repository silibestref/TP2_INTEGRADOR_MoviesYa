class FavoritosNoExiste extends Error {
    constructor(message) {
      super(message);
      this.name = "FavoritosNoExiste";
    }
  }
  
module.exports = FavoritosNoExiste