var express    = require('express'),
	bodyParser = require('body-parser'),
	mongoose   = require('mongoose');

var Chore = require('./models/chore');

var app = express();

//app.use(express.static(__dirname + '/dist'));

mongoose.connect('mongodb://orange394:bookit!12@ds157390.mlab.com:57390/roomme')

//Use bodyparser
app.use(bodyParser());

app.post('/chores', function(req, res) {

	console.log(req.body);

	var chore_name = req.body.name;

	if (!chore_name.length) res.send(400);

	var nchore = new Chore({
	  name: chore_name
	});

	nchore.save(function(err) {
	  if (err) throw err;
	  console.log('Chore saved.');
	  res.send(200);
	});

});

app.get('/chores', function(req, res) {

	Chore.find({}, function(err, chores) {
	  if (err) throw err;

	  console.log(chores);
	  res.status(200).send(chores);
	});

});

app.listen(8000);