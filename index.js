'use strict'

var mongoose = require('mongoose');
var app = require('./express_server.js');

//--------------------

var port = 8080;
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/db_mm',  { useMongoClient: true})
.then(() => {

    console.log("La conexión a la base de datos curso_mean_social se ha realizado correctamente")

    app.listen(port, () => {
        console.log("servidor corriendo en http://localhost:8080");
    });

}).catch(err => console.log(err));

