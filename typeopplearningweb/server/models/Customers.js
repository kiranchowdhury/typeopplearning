var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var customerSchema = mongoose.Schema({
  name: {type:String, required: '{PATH} is required'},
  contactName: {type:String},
  noOfUsers: {type: Number},
  email: {
      type:String,
      required:'{PATH} is required!',
  },
  phone: {type: String},
  address: {type: String},
  url: {type: String},
  remainingBudget: {type: Number},
  specialCredits: {type: String}
}, {collection: 'Customer'});

var Customer = module.exports = mongoose.model('Customer',customerSchema);

