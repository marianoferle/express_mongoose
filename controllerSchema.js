var Model_ = require('./modelSchema.js');


exports.getPersona = async function(req,res){
    var nombre_ = req.params.nombre;
    console.log(nombre_);

    res.send('Hola ' + nombre_ + '!');
   
}