var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var choreSchema = new Schema({
  name: String
});

var Chore = mongoose.model('Chore', choreSchema);

module.exports = Chore;