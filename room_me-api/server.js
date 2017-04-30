var express    = require('express'),
	bodyParser = require('body-parser'),
	mongoose   = require('mongoose');

var Chore = require('./models/chore');
var User = require('./models/user');

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
	var chore_complete = req.body.completed;
  var chore_assignedTo = req.body.assignedTo;

	if (!chore_name.length) res.send(400);

	var nchore = new Chore({
	  name: chore_name,
		completed: chore_complete,
    assignedTo: chore_assignedTo
	});

  console.log(nchore);

	nchore.save(function(err) {
	  if (err) throw err;
	  Chore.find({}, function(err, chores) {
		  if (err) throw err;
		  res.status(200).send(chores);
		});

	});

});

app.get('/chores', function(req, res) {

	Chore.find({}, function(err, chores) {
	  if (err) throw err;
	  res.status(200).send(chores);
	});

});

app.get('/users/:name', function(req, res) {

	User.find({name:req.params.name}, function(err, user) {
	  if (err) throw err;
	  res.status(200).send(user);
	});

});

app.get('/users', function(req, res) {

	User.find({}, function(err, user) {
	  if (err) throw err;
	  res.status(200).send(user);
	});

});


// Delete chore by chore ID
app.put('/chores/:taskId', function(req, res) {
    var completed = (req.body.completed == 'true');
	Chore.update({ _id: req.params.taskId},{$set: {completed: !completed}}, function(err) {
		if (err) throw err;
    console.log(req.body);
    console.log("Changing Task from: " + completed + " to " + !completed);
		res.status(200).send('Success!');
	})
});

app.listen(8000);
console.log("Server alive on port 8000");
