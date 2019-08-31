var mongoose = require('mongoose');
var Model_ = require('./modelSchema.js');


exports.getPersona = async function(req,res){
    var nombre_ = req.params.nombre;
    //console.log(nombre_);   
    //-------------------    
    /*await Model_.findOne({'edad':32},function(err,user_){
        console.log(user_);
        res.send('-'+ user_.params.nombre + '-'); 
    });*/


    await Model_.findOne({'nombre':nombre_,'edad':'32'},function(err,user_){
        console.log(user_);
        res.send(
            'Hola ' + 
            user_.get('nombre') + 
            '!'+
            "edad:"+
            user_.get('edad')
            );
    })
  

   
}
