
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  contactName: String,
  noOfUsers: String,
  email: String,
  phone: String,
  address: String,
  url: String
}, {collection: 'user'});

var User = module.exports = mongoose.model('user', userSchema);

module.exports.getUsers = function (callback, limits) {
  User.find(callback).limit(limits);
}

module.exports.createUser = function (user, callback) {
  User.create(user, callback);
}
