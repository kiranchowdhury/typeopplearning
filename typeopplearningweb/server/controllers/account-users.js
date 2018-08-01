var User = require("../models/Users");
// require("mongoose").model('User');
var encrypt = require("../utils/encryption");

var generator = require('generate-password');
var nodemailer = require('nodemailer');

exports.signup = function(req,res,next) {
  var signupReq = req.body; // email and special credit: don't know what is the business rule behind the special credit
  var email = signupReq.email.toLowerCase();
  var salt = encrypt.createSalt();


  //generate temp pwd
  var password = generator.generate({
    length: 20,
    numbers: true,
    symbols: true
});
console.log('TEMP PASSWORD', password);
var hashed_pwd = encrypt.hashPwd(salt, password);
// var hashed_pwd = 't30I4JEkEcppxlU5asiE/LrC4/816zLCMS2UTh2x5gONjY8Dpj/9HCw+lWDDGCdHhUAm+lOFNozdZB0sZR/mKhA22fvsL24EPopCMXln2jjjZkWwlsF5nzOnDDyJnq6kteG+cGcoMtzwuV0GJcvyDcWOvANi9';
console.log('TEMP PASSWORD');

  var userToCreate = {
    name: '',
    email: email,
    salt: salt,
    hashed_pwd: hashed_pwd,
    status: 'I',
    role: 'U',
    firstTimeLogin: 'Y',
    specialCredits: signupReq.specialcredits
  }

  User.create(userToCreate,function(error,user) {
      if(error) {
          if(error.toString().indexOf('E11000')>-1) {
              error = new Error('Duplicate Username');
          }
          // res.status(400);
          return res.send({status: 0, code: 'ET0004', message: error.message});
      } else {
        // send temp pwd via email
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
          to: email,
          cc: 'kiran.soft@gmail.com',
          subject: 'Registration Confirmation',
          html: '<h3>Dear user,<p>Welcome to Typeopplearing. Your temporary password is <strong>'+password+'<strong>. Please reset this password to finish your activation process.'
        };
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            //res.send({msg: 'can not send email', error: error.message})
            // do nothing
            res.send({status: 0, code: 'ETA0001', message: error.message});
          } else {
            res.send({email: email, status: 1, code: 'SUCCESS', message: 'Email sent with temp password'});
          }
        });
      }


  });

};

exports.resetPassword = function(req, res) {
  var payload = req.body;

  var oldPwd = payload.password;
  var newPwd = payload.newPassword;
  var email = payload.email;
  var salt = encrypt.createSalt();
  var hashed_pwd = encrypt.hashPwd(salt, newPwd);
  // get the user from db..
  User.findOne({email:email}).exec(function(error, user) {
    // validate if oldPwd matches ..
    if(user && user.authenticate(oldPwd)) {
      // valid old pwd
      // let us save the new password
      user.salt = salt;
      user.hashed_pwd = hashed_pwd;
      user.status = 'A';
      user.firstTimeLogin = '';
      User.update({email: email}, user, function(error) {
        if(error) {
          res.send({status: 0, code: 'ETA0003', message: error.message})
        } else {
          res.send({status: 1, code: 'SUCCESS', message: 'User activated successfully'});
        }
      })
    } else {
      res.send({status: 0, code: 'ETA0002', message: 'Old password does not match.'})
    }
  })
}
