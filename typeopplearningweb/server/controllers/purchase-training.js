var Customer = require('../models/Customers');
var TrainingDetails = require('../models/TrainingDetails');
var PurchaseTraining = require('../models/PurchaseTraining');
var EmployeeTraining = require('../models/EmployeeTraining');
var Employee = require('../models/Employee')

exports.getPurchaseTrainingCategory = function(req, res) {
  console.log(req.user.email);
   Customer.findOne({email: req.user.email}).exec(function(error, cust) {
    console.log(cust);
    if(error){
      res.send({status: 0, code: 'ETCP_0001', message: error.message, count: 0, equipmentCategories: [] });
    }else{

      if(cust === null){
        Employee.findOne({'user': req.user._id}).exec(function(error, employee) {
          //console.log('log===1========');
          if(error){
            res.send({status: 0, code: 'ETCP_0001', message: error.message, count: 0, equipmentCategories: [] });
          }else{

            PurchaseTraining.find({'customer' : employee.customer}).exec( function(error, purchasedTrainings) {

              let trainingIdList = [];
              for(let i=0; i<purchasedTrainings.length; i++){

                trainingIdList.push(
                     purchasedTrainings[i].trainingdetails
                )
              }
             if (error) {
               res.send({status: 0, code: 'ETCP_0002', message: error.message, count: 0, equipmentCategories: [] });
             }else {
              TrainingDetails.find({'_id': { $in: trainingIdList }}).exec(function(error, trainingdetailsList){

                if (error) {
                  res.send({status: 0, code: 'ETCP_0003', message: error.message, count: 0, equipmentCategories: [] });
                }else {
                  let equipmentCategories = [];
                  for(let i=0; i<trainingdetailsList.length; i++){
                    let category = trainingdetailsList[i].equipmentCategory;
                    let flag = false;
                    for(let j=0; j<equipmentCategories.length; j++){
                      if(equipmentCategories[j].categoryName === category){
                        flag = true;
                      }
                    }
                    if(!flag){
                      equipmentCategories.push({
                        categoryName: trainingdetailsList[i].equipmentCategory,
                        categoryAlias: trainingdetailsList[i]._id,
                        equipmentIcon: trainingdetailsList[i].equipmentIcon,
                      })
                    }

                  }

                  res.send({

                    status: 1,
                    code: 'SUCCESS',
                    message: 'Training Details retrieved successfully',
                    count: 3,
                    equipmentCategories: equipmentCategories

                  })
                }


              })
             }
            })
          }

        })
      }else{
        PurchaseTraining.find({'customer' : cust._id}).exec( function(error, purchasedTrainings) {

          let trainingIdList = [];
          for(let i=0; i<purchasedTrainings.length; i++){

            trainingIdList.push(
                 purchasedTrainings[i].trainingdetails
            )
          }

         if (error) {
           res.send({status: 0, code: 'ETCP_0002', message: error.message, count: 0, equipmentCategories: [] });
         }else {
          TrainingDetails.find({'_id': { $in: trainingIdList }}).exec(function(error, trainingdetailsList){

            if (error) {
              res.send({status: 0, code: 'ETCP_0003', message: error.message, count: 0, equipmentCategories: [] });
            }else {
              let equipmentCategories = [];
              for(let i=0; i<trainingdetailsList.length; i++){
                let category = trainingdetailsList[i].equipmentCategory;
                let flag = false;
                for(let j=0; j<equipmentCategories.length; j++){
                  if(equipmentCategories[j].categoryName === category){
                    flag = true;
                  }
                }
                if(!flag){
                  equipmentCategories.push({
                    categoryName: trainingdetailsList[i].equipmentCategory,
                    categoryAlias: trainingdetailsList[i]._id,
                    equipmentIcon: trainingdetailsList[i].equipmentIcon,
                  })
                }

              }

              res.send({

                status: 1,
                code: 'SUCCESS',
                message: 'Training Details retrieved successfully',
                count: 3,
                equipmentCategories: equipmentCategories

              })
            }


          })
         }
        })
      }
      console.log(cust);

     }
  })
  /* Employee.find({'user': req.user._id}).exec( function(error, employees) {
    // console.log(employees[0].employeetrainings.length);
    if (error) {
      res.send({status: 0, code: 'ETE_0001', message: error.message, count: 0, userList: [] });
    }else {
      console.log("employees");
      console.log(employees);
      res.send( {
        status: 1,
        code: 'SUCCESS',
        message: 'Users retrieved succesfully.',
        userList: employees
      })
    }
  }) */

}

exports.getEquipmentCategory = function(req, res) {
  var payload = req.query.trainingId;
  //console.log(payload);
  //console.log('into equipment category==========='+payload);
  TrainingDetails.findOne({'_id': payload}).exec(function(error, trainingdetails){
    //console.log(trainingdetails);
    if(error) {
      res.send({status: 0, code: 'ETCP_0004', message: error.message, equipmentCategory:{}});
    } else {

      res.send({
        status: 1,
        code: 'SUCCESS',
        message: 'Equipment category successfully fetched.',
        equipmentCategory: {
          categoryName: trainingdetails.equipmentCategory,
          categoryAlias: trainingdetails._id,
          equipmentIcon: trainingdetails.equipmentIcon,
        }
      })
    }
  })
}

exports.getEquipmentTypes = function(req, res) {
  var payload = req.query.trainingId;
  //console.log(payload);
  //console.log('into equipment types==========='+payload);
  TrainingDetails.findOne({'_id': payload}).exec(function(error, trainingdetails){
    //console.log(trainingdetails);
    if(error) {
      res.send({status: 0, code: 'ETCP_0005', message: error.message, equipmentDetails:[]});
    } else {
      TrainingDetails.find({'equipmentCategory': trainingdetails.equipmentCategory}).exec(function(error, trainingdetailsList){
        /* let equipmentTypes = [];
            for(let i=0; i<trainingdetailsList.length; i++){
              let equipmentType = trainingdetailsList[i].equipmentType;
              let flag = false;
              for(let j=0; j<equipmentTypes.length; j++){
                if(equipmentTypes[j].equipmentType === equipmentType){
                  flag = true;
                }
              }
              if(!flag){
                equipmentTypes.push({
                  equipmentType : trainingdetailsList[i].equipmentType
                })
              }

            } */
            console.log(trainingdetailsList);
        if(error) {
          res.send({status: 0, code: 'ETCP_0006', message: error.message, equipmentDetails:[]});
        } else {
          res.send({
            status: 1,
            code: 'SUCCESS',
            message: 'Equipment Types successfully retrived.',
            equipmentDetails: trainingdetailsList
          })
        }

      })


    }
  })
}

exports.getEquipmentData = function(req, res) {
  var payload = req.query.equipmentType;
  //console.log(payload);
  TrainingDetails.find({'equipmentType': payload}).exec(function(error, trainingdetails){
   // console.log(trainingdetails);

    if(error) {
      res.send({status: 0, code: 'ETCP_0005', message: error.message, equipmentData:[]});
    } else {
      let equipmentData = trainingdetails;
          res.send({
            status: 1,
            code: 'SUCCESS',
            message: 'Equipment Types successfully retrived.',
            equipmentData: equipmentData
          })

    }
  })
}

exports.getStartTrainigDetail = function(req, res) {
  var payload = req.query.trainingId;
  //console.log(payload);
  console.log('into equipment Detail==========='+payload);
  TrainingDetails.findOne({'_id': payload}).exec(function(error, trainingdetails){
    console.log(trainingdetails);

    if(error) {
      res.send({status: 0, code: 'ETCP_0006', message: error.message, equipmentDetail:{}});
    } else {

      Employee.findOne({'user': req.user._id}).exec( function(error, employee) {
        console.log('log employee==========');
         console.log(employee);
        if (error) {
          res.send({status: 0, code: 'ETE_0007', message: error.message, count: 0, equipmentDetail:{} });
        }else {
          EmployeeTraining.findOne({'trainingdetails': payload, 'employee': employee}).exec(function(error, employeeTraining){
            console.log('log employeetraining==========');
            console.log(employeeTraining);

            if(error) {
              res.send({status: 0, code: 'ETCP_0008', message: error.message, equipmentDetail:{}});
            } else {
              if( employeeTraining === null){
                /* let empTraining = {
                  employee : employee,
                  trainingdetails : trainingdetails,
                  status : "in progress"
                }; */
                console.log('into saving==========');
                EmployeeTraining.create( { 'employee' : employee,
                  'trainingdetails' : trainingdetails,
                  status : "in progress"}, function(error, empTraining) {
                    console.log(empTraining)
                  if(error) {
                    res.send({status: 0, code: 'ETP_0009', message: error.message, equipmentDetail: {}});
                  } else {
                    employee.employeetrainings.push(empTraining);
                    console.log(employee);
                    Employee.update({_id: employee._id}, employee).exec( function(error, emp) {
                      console.log(emp);
                      if(error) {
                        res.send({status: 0, code: 'ETP_0010', message: error.message, equipmentDetail: {}});
                      } else {
                        let equipmentDetail = trainingdetails;
                        res.send({
                          status: 1,
                          code: 'SUCCESS',
                          message: 'Equipment Types successfully retrived.',
                          equipmentDetail: equipmentDetail
                        })
                      }

                    })

                  }

                })
              }else{
                let equipmentDetail = trainingdetails;
                res.send({
                  status: 1,
                  code: 'SUCCESS',
                  message: 'Equipment Types successfully retrived.',
                  equipmentDetail: equipmentDetail
                })
              }

            }
          })
        }

      })



    }
  })
}

exports.savePurchaseTraining = function(req, res){
  var trainingId = req.body.id;
  Customer.findOne({email: req.user.email}).exec(function(error, customer) {
    if(error){
      res.send({ status: 0, code: 'ETPT_0001', message: error.message });
    }else{
      PurchaseTraining.findOne({'customer' : customer._id, 'trainingdetails': trainingId}).exec( function(error, purchaseTraining) {

          if(error){
            res.send({ status: 0, code: 'ETPT_0002', message: error.message });
          }
          else if(purchaseTraining){
            res.send({ status: 2, code: 'STPT_0002', message: 'Already Subscribed' });
          }
          else{
            PurchaseTraining.create({
              customer: customer._id,
              trainingdetails: trainingId,
              purchasedate: new Date(),
              status: 'in progress',
              invoicenumber: ''
            }, function(error, newPurchaseTraining) {
              if(error) {
                res.send({ status: 0, code: 'ETPT_0003', message: error.message });
              }
              else {
                res.send({ status: 1, code: 'STPT_0001', message: 'Purchased Succesfully' });
              }
            })
          }
      });
    }
  });
}
