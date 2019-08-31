var mongoose_ = require('mongoose');

//Esquema de los usuarios de la colleccion USER
var personaSchema = new mongoose_.Schema({
    nombre:String,
    edad:Number,
    comentario:String,
    fecha:{dia:Number,mes:Number,año:Number} 
});


//nombre de la collection dentro de la BD - User - se le asigna el Esquema
module.exports = mongoose_.model('usuario',personaSchema);






