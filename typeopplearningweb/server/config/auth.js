
var passport = require("passport");
var conf = require('../config/config');
var nJwt = require('njwt');
var generator = require('generate-password');
var nodemailer = require('nodemailer');
var encrypt = require("../utils/encryption");
var User = require("../models/Users");

var generator = require('generate-password');

const env = process.env.NODE_ENV || 'development';

exports.authenticate = function(req,res,next){
  console.log('ROUTES CALLED', req.body);
  req.body.username = req.body.username.toLowerCase();
  if(req.body.password === ''){
    req.body.password = 'password';
  }
  var auth = passport.authenticate('local',function(error,user){
      if(error) {
          return next(error);
      }
      if(!user){
          return res.send({success:false});
      }
      req.logIn(user, function(error) {
          console.log('User ===>', user);
          if(error) {
              return next(error);
          }
         //res.send({success:true,user:{token:generateToken(user), name: user.name, role: user.role, email: user.email}});
         res.send({
           token: generateToken(user),
           name: user.name,
           role: getRoleDesc(user.role),
           email: user.email
         })
      })
  })
  auth(req,res,next);
};

exports.resetPassword = function(req,res,next){
  console.log('resetPassword=========', req.body);
  var email = req.body.email;
  var token = req.body.token;
  // get the user from db..
  User.findOne({email:email}).exec(function(error, user) {
    // validate if oldPwd matches ..
    console.log('login token verify======',user.loginToken === token);
    if(user) {
      if(user.loginToken === token && user.firstTimeLogin === 'Y'){
        console.log('========user found', user);
        var salt = encrypt.createSalt();
        var hashed_pwd = encrypt.hashPwd(salt, req.body.password);
        user.salt = salt;
        user.hashed_pwd = hashed_pwd;
        user.status = 'A';
        user.firstTimeLogin = '';
        User.update({email: email}, user, function(error) {
          if(error) {
            res.send({status: 0, code: 'ETLV0003', message: error.message, authenticated: false});
          } else {
            res.send({status: 1, code: 'SUCCESS', message: 'User activated successfully', authenticated: true});
          }
        })
      }
      else {
        res.send({status: 0, code: 'ETLV0002', message: 'Token expires after the first use.', authenticated: false})
      }
    }
    else{
      console.log('====user not found');
      res.send({status: 0, code: 'ETLV0004', message: 'User not found', authenticated: false})
    }
  });
};

getRoleDesc = function(role) {
  return (role === 'A') ? 'ADMIN' : ((role==='C') ? 'CUSTOMER' : 'USER');
}

generateToken = function(user) {
  var secret = conf[env].secret;
  var claims = {
    sub: user.email,
    iss: 'http://typeopplearning.no',
    permissions: user.role
  };
  var jwt = nJwt.create(claims,secret);
 // console.log(jwt);
  var token = jwt.compact();
 // console.log(token);
  return token;
}

/** Add requiresApiLogin in the protected routes  */
exports.requiresApiLogin = function(req,res,next) {
  if(!req.isAuthenticated()) {
      res.status(403);
      res.end();
  } else {
      next();
  }
};
/** Add requiresRole to the routes that needs specific role authorization */
exports.requiresRole = function(role) {
  return function(req,res,next) {

      var isAuthenticated = req.isAuthenticated();
      // console.log('===rolecheck==', req);
      if(role==='admin') {
          if(isAuthenticated && req.user.status==='A' && req.user.role==='A') {
              next();
          }else {
              res.status(403);
              res.end();
          }
      } else if(role==='customer') {
          if(isAuthenticated && req.user.status==='A' && req.user.role ==='C') {
              next();
          } else {
              res.status(403);
              res.end();
          }
      } else if(role==='user') {
          if(isAuthenticated && req.user.role === 'U') {
              next();
          } else {
              res.status(403);
              res.end();
          }
      } else {
        // Unknow role
        res.status(403);
        res.end();
      }
  }
}

/** Add requiresRole to the routes that needs specific role authorization */
exports.requiresAnyRole = function(roles) {
  return function(req,res,next) {
      var rolesArray = roles.split(",");
      var isAuthenticated = req.isAuthenticated();
      var isPermit = false;
      rolesArray.forEach(function(role){
           // console.log('===rolecheck==', req);
            if(role==='admin') {
              if(isAuthenticated && req.user.status==='A' && req.user.role==='A') {
                  // next();
                  isPermit = true;
              }
              // else {
              //     res.status(403);
              //     res.end();
              // }
          } else if(role==='customer') {
              if(isAuthenticated && req.user.status==='A' && req.user.role ==='C') {
                  // next();
                  isPermit = true;
              }
              // else {
              //     res.status(403);
              //     res.end();
              // }
          } else if(role==='user') {
              if(isAuthenticated && req.user.role === 'U') {
                  // next();
                  isPermit = true;
              }
              // else {
              //     res.status(403);
              //     res.end();
              // }
          }
      })
      if( isPermit ){
        next();
      }
      else {
        // Unknow role
        res.status(403);
        res.end();
      }
  }
}

exports.hello = function(req, res) {
  var password = generator.generate({
    length: 20,
    numbers: true,
    symbols: true
});

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'kiran.soft@gmail.com',
    pass: 'K1r@n!@m_79'
  }
});
var mailOptions = {
  from: 'kiran.soft@gmail.com',
  to: 'kiranchowdhury@in.ibm.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'+password
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    res.send({msg: 'can not send email', error: error.message})
  } else {
    res.send({msg: 'email sent!'});
  }
});


}
