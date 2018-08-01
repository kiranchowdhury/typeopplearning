
var Employee = require("../models/Employee");
var Customer = require("../models/Customers");
var User = require("../models/Users");
var encrypt = require("../utils/encryption");
var generator = require('generate-password');
var nodemailer = require('nodemailer');

exports.getAllEmployee = function (req, res) {
  // .populate('customer').populate('user').populate('employeetrainings')
  Customer.findOne({'email': req.user.email}).exec( function(error, customer) {
    Employee.find({'customer': customer._id}).exec( function(error, employees) {
      // console.log(employees[0].employeetrainings.length);
      if (error) {
        res.send({status: 0, code: 'ETE_0001', message: error.message, count: 0, userList: [] });
      }else {
        res.send( {
          status: 1,
          code: 'SUCCESS',
          message: 'Users retrieved succesfully.',
          count: employees.length,
          userList: employees
        })
      }
    })
  })

}

exports.saveUserList = function(req, res){
  req.body.users.forEach(user => {
    Employee.update({_id: user._id}, user, {multi: false}).exec(function(error, result){
    })
  })
  res.send({
    status: 1,
    code: 'SUCCESS',
    message: 'User Details updated successfully'
  })
}

exports.createEmployee = function(req, res) {
  var employee = req.body;
  var salt = encrypt.createSalt();
  // var password = encrypt.hashPwd(salt,'password');
  var password = generator.generate({
    length: 20,
    numbers: true,
    symbols: true
  });
  var verificationToken = generator.generate({
    length: 80,
    numbers: true,
    uppercase: true
  });
  var user = {
    name: employee.fullname,
    email:employee.email,
    salt:salt,
    hashed_pwd:password,
    status:'A',
    role:'U',
    firstTimeLogin: 'Y',
    loginToken: verificationToken
  };

  User.create(user, function(error, newuser) {
    if(error) {
      res.send({status: 0, code: 'ETE_0001', message: error.message});
    }
    else {
      Customer.findOne({'email': req.user.email}).exec( function(error, customer) {
        employee.customer = customer._id;
      employee.user = newuser._id;
        var resetUrl = 'http://typeopplearning.herokuapp.com/#/pages/reset/'+employee.email
        +'/'+verificationToken;
      var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'typeopplearingnebel@gmail.com',
          pass: 'nebel@123'
        }
      });
      var mailOptions = {
        from: 'Typeopplaering',
        to: employee.email,
        cc: 'smitbaranwal@gmail.com',
        subject: 'Registration Confirmation',
        html: '<h3>Dear employee,<p>Welcome to Typeopplearing. Click on the <a href="'+resetUrl+'"> <strong>LINK<strong></a> to reset your password. Please reset this password to finish your activation process.'
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {

        } else {

        }
      });

      Employee.create(employee, function(error, newemployee) {
        if(error) {
          res.send({status: 0, code: 'ETE_0002', message: error.message});
        } else {
         Employee.find({'customer': customer._id}).exec( function(error, employees) {
            // console.log(employees[0].employeetrainings.length);
            if (error) {
              res.send({status: 0, code: 'ETE_0003', message: error.message, count: 0, userList: [] });
            }else {
              res.send( {
                status: 1,
                code: 'STEC_0001',
                message: 'Employee saved successfully',
                count: employees.length,
                userList: employees
              })
            }
          })
        }
      })
    })
  }
  });

}


exports.removeEmployee = function (req, res) {
  var userId = req.body.user._id;
   Employee.remove({_id: userId}, function(error){
    if(error){
      res.send({status: 0, code: 'ETRU_0001', message: error.message });
    }
    else{
      res.send({status: 1, code: 'STRU_0001', message:'User Deleted Successfully' });
    }
  })
}

exports.getUserDetails = function (req, res) {
  var employeeId = req.body.id;
  console.log('employeeId=======', req.body);
  Employee.findOne({_id: employeeId}).exec( function(error, employee) {
    if(error){
      res.send({status: 0, code: 'ETEG_0001', message: error.message });
    }
    else{
      res.send({status: 1, code: 'STEG_0001', message:'User Details fetched Successfully', userDetail: employee });
    }
  });
}
