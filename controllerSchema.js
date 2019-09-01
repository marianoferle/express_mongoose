var mongoose = require('mongoose');
var Model_ = require('./modelSchema.js');


exports.getPersona = async function(req,res){
    var nombre_ = req.params.nombre;

    /*await Model_.findOne({'edad':30},function(err,user_){
        console.log(user_);
        res.send('-'+ user_.params.nombre + '-'); 
    });*/    
    //res.send(user_.get('nombre') + '<br/>'+ user_.get('edad') );        

    var uss_ = await Model_.findOne({'nombre':nombre_,'edad':'30'});   

    res.send(uss_.nombre+".."+uss_.edad); 

   
}
