var mongoose = require('mongoose');
var Model_ = require('./modelSchema.js');


exports.getPersona = async function(req,res){
    var nombre_ = req.params.nombre;
    //console.log(nombre_);   
    //-------------------
    
    await Model_.find({'edad':32},'nombre',function(err,user_){
        console.log(user_);
    });
  

    res.send('Hola ' + nombre_ + '!'); 
}
