'use strict'
var express = require('express');
var Router_ = express.Router();

var Controlador_ = require('./controllerSchema');


Router_.get('/Persona/:nombre', Controlador_.getPersona);



module.exports = Router_;

