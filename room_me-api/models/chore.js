var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var choreSchema = new Schema({
  name: String,
  completed: Boolean,
  assignedTo: [String]
});

var Chore = mongoose.model('Chore', choreSchema);
ack
module.exports = Chore;
