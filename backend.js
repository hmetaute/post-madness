// Server setup
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var logfmt = require('logfmt');

//configuration
mongoose.connect('mongodb://localhost:27017/mydb');

app.use(logfmt.requestLogger());


var port = Number(process.env.PORT || 5000);

app.listen(port, function(){
	console.log("Listening on " + port);
    });

// models
var Todo = mongoose.model('Todo', {
		text : String
	});

// routes ======================================================================

app.get('/saludo-laura', function(req, res){
	res.send('<h1>Hola, Laura mi hermosa. Esto es lo que estoy haciendo haciendo. Pense que era mas facil que me entendieras si te mostraba! :* </h1> Una imagencita para ti: <img src="http://sp1.fotolog.com/photo/33/49/30/simpsonss1/1244121697099_f.jpg"> <b> y un videito: <iframe width="560" height="315" src="//www.youtube.com/embed/w_hdJU-tK8o" frameborder="0" allowfullscreen></iframe>');
    });

app.get('/', function(req, res){
	res.send('Hello, World!');
    });

app.get('/api/todos', function(req, res) {

	// use mongoose to get all todos in the database
	Todo.find(function(err, todos) {

		// if there is an error retrieving, send the error. nothing after res.send(err) will execute
		if (err)
			res.send(err)

		res.json(todos); // return all todos in JSON format
	});
});

// create todo and send back all todos after creation
app.post('/api/todos', function(req, res) {

	// create a todo, information comes from AJAX request from Angular
	Todo.create({
		text : req.body.text,
		done : false
	}, function(err, todo) {
		if (err)
			res.send(err);

		// get and return all the todos after you create another
		Todo.find(function(err, todos) {
			if (err)
				res.send(err)
			res.json(todos);
		});
	});

});

app.delete('/api/todos/:todo_id', function(req, res) {
	Todo.remove({
		_id : req.params.todo_id
	}, function(err, todo) {
		if (err)
			res.send(err);

		// get and return all the todos after you create another
		Todo.find(function(err, todos) {
			if (err)
				res.send(err)
			res.json(todos);
		});
	});
});
