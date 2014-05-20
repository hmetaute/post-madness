// Server setup
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var logfmt = require('logfmt');

//configuration
app.use(logfmt.requestLogger());


app.get('/saludo-laura', function(req, res){
	res.send('<h1>Hola, Laura mi hermosa. Esto es lo que estoy haciendo haciendo. Pense que era mas facil que me entendieras si te mostraba! :* </h1> Una imagencita para ti: <img src="http://sp1.fotolog.com/photo/33/49/30/simpsonss1/1244121697099_f.jpg"> <b> y un videito: <iframe width="560" height="315" src="//www.youtube.com/embed/w_hdJU-tK8o" frameborder="0" allowfullscreen></iframe>');
    });

app.get('/', function(req, res){
	res.send('Hello, World!');
    });

var port = Number(process.env.PORT || 5000);

app.listen(port, function(){
	console.log("Listening on " + port);
    });
