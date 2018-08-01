var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var employeeSchema = new Schema({
  fullname: {type: String},
  email: {type: String, unique: true, required: '{PATH} is required!'},
  address: {type: String},
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
    required: '{PATH} is required!'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    // unique: true,
    required: '{PATH} is required!'
  },

  employeetrainings: [{
    type: Schema.Types.ObjectId,
    ref: 'employeetraining',
    required: '{PATH} is required!'
  }],
  phone: {type: String}

});

var Employee = module.exports = mongoose.model('employee', employeeSchema);


