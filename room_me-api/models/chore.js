var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var choreSchema = new Schema({
  name: String,
  completed: Boolean,
});

var Chore = mongoose.model('Chore', choreSchema);

module.exports = Chore;
