'use strict'

var mongoose = require('mongoose');
var app = require('./express_server');

//--------------------

var port = 5000;
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/db_mm', {useNewUrlParser: true})
.then(() => {

    
    
    console.log("conexion ok!!")

    app.listen(port, () => {
        console.log("servidor corriendo en http://localhost:5000");
    });

}).catch(err => console.log(err));

