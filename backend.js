// Server setup
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var logfmt = require('logfmt');

//configuration
app.use(logfmt.requestLogger());


app.get('/', function(req, res){
	res.send('Hello, World!');
    });

var port = Number(process.env.PORT || 5000);

app.listen(port, function(){
	console.log("Listening on " + port);
    });
