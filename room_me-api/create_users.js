var mongoose   = require('mongoose');

var User = require('./models/user');

//app.use(express.static(__dirname + '/dist'));

mongoose.connect('mongodb://orange394:bookit!12@ds157390.mlab.com:57390/roomme')

var user = new User({
  name: "john",
  tasks_completed: []
});

user.save(function(err) {
  if (err) throw err;
  console.log('User saved.',user);

});

user = new User({
  name: "spenser",
  tasks_completed: []
});

user.save(function(err) {
  if (err) throw err;
  console.log('User saved.',user);

});

user = new User({
  name: "sehmon",
  tasks_completed: []
});

user.save(function(err) {
  if (err) throw err;
  console.log('User saved.',user);

});

user = new User({
  name: "lily",
  tasks_completed: []
});

user.save(function(err) {
  if (err) throw err;
  console.log('User saved.',user);

});

