const express = require('express');
const createError = require('http-errors');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
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

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;