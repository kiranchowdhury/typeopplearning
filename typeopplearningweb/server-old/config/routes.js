var restcontroller = require('../controller/eprestcontroller');
const express = require('express');
var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test_typeopplearing');

mongoose.connect('mongodb://dbadmin:dbadmin123@ds261570.mlab.com:61570/test_typeopplearing');

// var Schema = mongoose.Schema;

// var userSchema = new Schema({
//   name: String,
//   contactName: String,
//   noOfUsers: String,
//   email: String,
//   phone: String,
//   address: String
// }, {collection: 'user'});

// var User = mongoose.model('user', userSchema);
// User.find().then(function (doc) {
//   console.log('User', doc);
// })

//const router = express.Router();

// router.get('/get', (req, res) =>  {
//   console.log('calling get');
//   restcontroller.doGet(req, res);
// });

module.exports = function(app) {
  console.log('--------routes.js------------');
  app.get('/api/get', restcontroller.doGet);
  // app.post('/api/post', restcontroller.doPost);
};
