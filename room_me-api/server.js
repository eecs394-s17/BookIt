var express    = require('express'),
	bodyParser = require('body-parser'),
	mongoose   = require('mongoose');

var Chore = require('./models/chore');

var app = express();

//app.use(express.static(__dirname + '/dist'));

mongoose.connect('mongodb://orange394:bookit!12@ds157390.mlab.com:57390/roomme')

//Use bodyparser
app.use(bodyParser());


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

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
	  Chore.find({}, function(err, chores) {
		  if (err) throw err;

		  console.log(chores);
		  res.status(200).send(chores);
		});

	});

});

app.get('/chores', function(req, res) {

	Chore.find({}, function(err, chores) {
	  if (err) throw err;

	  console.log(chores);
	  res.status(200).send(chores);
	});

});

// Delete chore by chore ID
app.delete('/chores/:taskId', function(req, res) {
	Chore.findByIdAndRemove(req.params.taskId, function(err) {
		if (err) throw err;
		console.log('Successfully deleted');
		res.send('Success');
	})
});

app.listen(8000);
