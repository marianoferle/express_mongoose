'use strict'
var express = require('express');
var bodyParser = require('body-parser');

//---------------------------
var app = express();
var Rutas_ = require('./rutaSchema.js'); 

//-----------------
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api', Rutas_);

//---------------------
module.exports = app;