var EmployeeTraining = require("../models/EmployeeTraining");
var Employee = require("../models/Employee");

exports.getEmployeeTrainingByEmployee = function (req, res){
  var employeeId = req.body.id;
  console.log('training body', employeeId);
  EmployeeTraining.find({'employee': employeeId}).populate('trainingdetails').exec(function(error, trainings){
    console.log('training list==',trainings);
    if (error) {
      res.send({status: 0, code: 'ETET_0001', message: error.message });
    }else {
      res.send( {
        status: 1,
        code: 'STET_0001',
        message: 'Employee trainings fetched successfully',
        count: trainings.length,
        userTrainings: trainings
      })
    }
  });
}

exports.updateEmployeeTraining = function (req, res){
  var training = req.body.training;
  training.status = 'passed';
  //console.log(training);
  EmployeeTraining.update({_id: training._id}, training).exec( function(error, empTraining){
    //console.log('after update');
    //console.log(training);
    if (error) {
      res.send({status: 0, code: 'ETET_0001', message: error.message, updatedUserTraining:{} });
    }else {
      res.send( {
        status: 1,
        code: 'STET_0001',
        message: 'Employee trainings updated successfully',
        updatedUserTraining: training
      })
    }
  });
}
