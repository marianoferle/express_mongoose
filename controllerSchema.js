var Model_ = require('./modelSchema.js');


exports.getPersona = async function(req,res){
    var nombre_ = req.params.nombre;
    
    var user_ = await Model_.findOne({ nombre: nombre_ }, function(err, doc){
        console.log(doc.nombre);
    });

    return user_;
}