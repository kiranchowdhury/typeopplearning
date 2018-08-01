var Mongoose = require("mongoose");
var Schema = Mongoose.Schema;

var EmployeeTrainingSchema = new Schema({
  employee: {
    type: Schema.Types.ObjectId,
    ref: 'employee',
    required: '{PATH} is required!'
  },
  trainingdetails: {
    type: Schema.Types.ObjectId,
    ref: 'trainingdetails',
    required: '{PATH} is required!'
  },
  status: {
    type: String
  }
});

var EmployeeTraining = module.exports = Mongoose.model('employeetraining', EmployeeTrainingSchema, 'employeetraining');
