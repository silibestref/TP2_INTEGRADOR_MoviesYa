const fs = require('fs');

const repositorioFavoritos = { 
    agregarPelicula : function(peli){
        data = JSON.stringify(peli);
        const exist = fs.existsSync('./pelisFavoritas.txt')
        if (exist) {
            fs.appendFile('pelisFavoritas.txt',','+data, (err) => {
                if (err) throw err;
            });
        } else {
            fs.writeFile('pelisFavoritas.txt',data, (err) => {
                if (err) throw err;
            });
        }
        return 'Pelicula agregada a la lista de favoritos';
    },
    mostrarLista : function() {
        const contenido = fs.readFileSync('./pelisFavoritas.txt');
        return JSON.parse('[' + contenido + ']'); 
    },
    estaVacio : function() {
        const exist = fs.existsSync('./pelisFavoritas.txt')
        return !exist;
    }
}

module.exports = {
    repositorioFavoritos
}
  