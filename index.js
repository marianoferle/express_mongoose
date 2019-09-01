'use strict'

var mongoose = require('mongoose');
var app = require('./express_server');

var Model_ = require('./modelSchema.js');

//--------------------

var port = 5000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/Persona', {useNewUrlParser: true}).then( async function(err,client){
    
  
    //crear user en colleccion
    /*
    const d_= new Model_({
        "nombre" : "nombre1",
        "edad" : 30,
        "comentario" : "nada",
        "fecha" : {
            "dia" : 12,
            "mes" : 4,
            "año" : 1985
        }
    });
    await d_.save();
    */

    /*
    await Model_.find({'edad':30},'nombre',function(err,user_){
        console.log(user_);
    });*/

               
    console.log('mongoose ..'); 

    app.listen(port, () => {
        console.log("servidor corriendo en http://localhost:5000");
    });
      

}).catch(err => console.log(err));


