// Server setup
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var logfmt = require('logfmt');

//configuration
app.use(logfmt.requestLogger());


app.get('/saludo-laura', function(req, res){
	res.send('<h1>Hola, Laura mi hermosa. Esto es lo que estoy haciendo haciendo. Pense que era mas facil que me entendieras si te mostraba! :* </h1>');
    });

app.get('/', function(req, res){
	res.send('Hello, World!');
    });

var port = Number(process.env.PORT || 5000);

app.listen(port, function(){
	console.log("Listening on " + port);
    });
