
var TrainingDetails = require('../models/TrainingDetails');

exports.getAllTrainingDetails = function(req, res){
  TrainingDetails.find({}).exec(function(error, trainingDetailsList) {
    if(error) {
      res.send({status: 0, code: 'ETTD_0001', message: error.message, count: 0, trainingDetailsList: [] });
    } else {
      res.send({
        status: 1,
        code: 'SUCCESS',
        message: 'Training Details retrieved successfully',
        count: trainingDetailsList.length,
        trainingDetailsList: trainingDetailsList
      })
    }
  })
}

exports.saveTrainingList = function(req, res){
  req.body.changesRefTrainingList.forEach(training => {
    console.log('=====training===========',training);
    TrainingDetails.update({_id: training._id}, training, {multi: false}).exec(function(error, result){
      console.log('=====result====',result);
    })
  })
  res.send({
    status: 1,
    code: 'SUCCESS',
    message: 'Training Details updated successfully'
  })
}

exports.createTrainingLibrary = function(req, res) {
  var trainingLibrary = req.body;
  console.log('=========='+trainingLibrary);
  TrainingDetails.create(trainingLibrary, function(error) {
    console.log(error, trainingLibrary);
    if(error){
      res.send({status: 0, code: 'ETCTD_0001', message: error.message, count: 0, trainingDetailsList: [] });
    }
    else{
      TrainingDetails.find({}).exec(function(error, trainingDetailsList) {
        if(error) {
          res.send({status: 0, code: 'ETCTD_0002', message: error.message, count: 0, trainingDetailsList: [] });
        } else {
          res.send({
            status: 1,
            code: 'SUCCESS',
            message: 'Training Details retrieved successfully',
            count: trainingDetailsList.length,
            trainingDetailsList: trainingDetailsList
          })
        }
      })
    }
  })
}

exports.removeTrainingLibrary = function (req, res) {
  var trainingLibId = req.body.id;
   TrainingDetails.remove({_id: trainingLibId}, function(error){
    if(error){
      res.send({status: 0, code: 'ETRTD_0001', message: error.message });
    }
    else{
      res.send({status: 1, code: 'STRTD_0001', message:'Training Library Deleted Successfully' });
    }
  })
}
