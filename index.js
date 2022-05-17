const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Settings
app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use(require('./routes'));


app.listen(app.get('port'), () => {
  console.log('Server is in port', app.get('port'));
});