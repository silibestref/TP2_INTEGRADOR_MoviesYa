const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes/');
const catalogo = require('./routes/catalogo.js');
const carrito = require('./routes/carrito.js');


// Settings
app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/",routes);
app.use('/carrito', carrito);
app.use('/catalogo', catalogo);


app.listen(app.get('port'), () => {
  console.log('Server is in port', app.get('port'));
});