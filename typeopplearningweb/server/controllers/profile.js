var Customer = require("../models/Customers");
var Employee = require("../models/Employee");

exports.getCustomerDetail = function(req, res) {
  var payload = req.query;
  console.log(req.user);
  var customerMail = payload.email;
  console.log('========payload======='+customerMail);

  if(req.user.role === 'C'){
    Customer.findOne({email: customerMail}).exec(function(error, customer) {
      console.log(customer);
      if(error) {
        res.send({status: 0, code: 'ETP_0001', message: error.message, customerDetail: {}});
      } else {
        let tempSpecialCredit = '';
        if(customer.specialCredits==undefined){
          tempSpecialCredit = '';
        }else{
          tempSpecialCredit = customer.specialCredits;
        }
        res.send({
          status: 1,
          code: 'SUCCESS',
          message: 'Profile detail retirieved successfully',
          customerDetail: {
            _id : customer._id,
            name : customer.name,
            address : customer.address,
            phone : customer.phone,
            email : customer.email,
            specialCredits : tempSpecialCredit,
            url : ""
          }
        })
      }
    })
  }else{
    console.log('==============user id========'+req.user._id);
    Employee.findOne({user: req.user._id}).exec(function(error,employee){
      console.log(employee);
      if(error){
        res.send({status: 0, code: 'ETP_0002', message: error.message, customerDetail: {}})
      }else{
        res.send({
          status: 1,
          code: 'SUCCESS',
          message: 'Profile detail retirieved successfully',
          customerDetail: {
            _id : employee._id,
            name : employee.fullname,
            address : employee.address,
            phone : employee.phone,
            email : employee.email,
            specialCredits : '',
            url : ""
          }
        })
      }
    })
  }

}

exports.updateProfile = function(req, res) {
  var cust = req.body;
  console.log(cust);
  console.log('into update===========');
  if(req.user.role === 'C'){
    Customer.update( {_id: cust._id}, cust, function(error) {
      if(error) {
        res.send({status: 0, code: 'ETP_0003', message: error.message, cust: {}});
      } else {

        res.send({
          status: 1,
          code: 'SUCCESS',
          message: 'Profile detail updated successfully',
          customerDetail: cust
        })
      }
    })
  }else{
    let employee = {
      _id: cust._id,
      address: cust.address,
      email: cust.email,
      fullname: cust.name,
       phone: cust.phone
    };
    console.log('==========into employeee update=============');
    console.log(employee);
    Employee.update({_id : employee._id}, employee, function(error){
      if(error){
        res.send({status: 0, code: 'ETP_0004', message: error.message, customerDetail: {}})
      }else{
        res.send({
          status: 1,
          code: 'SUCCESS',
          message: 'Profile detail updated successfully',
          customerDetail: {
            _id : employee._id,
            name : employee.fullname,
            address : employee.address,
            phone : employee.phone,
            email : employee.email,
            specialCredits : '',
            url : ""
          }
        })
      }
    })

  }

}
