var mongoose_ = require('mongoose');

var personaSchema = new mongoose_.Schema({
    nombre:String,
    edad:Number,
    comentario:String,
    fecha:{dia:Number,mes:Number,año:Number} 
});

module.exports = mongoose_.model('Persona',personaSchema);






