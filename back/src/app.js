const express = require('express');
const app = express();
const morgan = require('morgan');
require('dotenv').config();

let routes = require('./routes/index.js');

//routes 
app.use('/', routes);

//settings
app.set('port', process.env.PORT || 3000)

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });


//server start
app.listen(3000, () => {
    console.log(`Server on Port ${app.get('port')}`)
})