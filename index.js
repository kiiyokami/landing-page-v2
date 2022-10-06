var express = require('express');
var app = express();
var port = 8080;
var landing = require('./src/routes/landing');

app.listen(port, function(err){
    if (err) console.log("Error in server setup");
    console.log("Server loaded, listening on Port", port);

});

    app.use('/', landing);

    