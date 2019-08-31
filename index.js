'use strict'

var mongoose = require('mongoose');
var app = require('./express_server');

var Model_ = require('./modelSchema.js');

//--------------------

var port = 5000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/Persona', {useNewUrlParser: true}).then( async function(err,client){
    
    //var rr_= Model_.findOne({'nombre':'mariano'});
    //var rr_ = Model_.collection('User').find();
    //console.log(rr_);
   
    //crear user en colleccion
    /*
    const d_= new Model_({
        "nombre" : "mariano",
        "edad" : 32,
        "comentario" : "nada",
        "fecha" : {
            "dia" : 22,
            "mes" : 5,
            "año" : 1987
        }
    });
    await d_.save();
    */

    /*
    await Model_.find({'edad':32},'nombre',function(err,user_){
        console.log(user_);
    });*/
  

           
    
    console.log('mongoose ..'); 

    app.listen(port, () => {
        console.log("servidor corriendo en http://localhost:5000");
    });
      

}).catch(err => console.log(err));


