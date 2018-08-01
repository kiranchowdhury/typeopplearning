const path = require('path');
var auth = require("./auth");
var customer = require("../controllers/customers");
var user = require("../controllers/account-users");
var users = require("../controllers/users");
var employee = require("../controllers/employee");
var trainingDetails = require("../controllers/trainingDetails");
var employeeTraining = require("../controllers/employee-training")
var profile = require("../controllers/profile");
var purchaseTraining = require("../controllers/purchase-training");


  // app.use(express.static(path.join(__dirname, '../../dist')));

const express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require("cookie-parser")
var session = require('express-session');
var passport = require('passport');

module.exports = function(app, config) {
  console.log('ROOT PATH IS '+config.rootPath);
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());
  app.use(session({secret:config.secret,resave:false,saveUninitialized:false}));
  app.use(passport.initialize());
  app.use(passport.session());
  passport.serializeUser(function(user, done) {
    //TODO - KIRAN => Externalize the user session to make the backend stateless.
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    // placeholder for custom user deserialization.
    // we are going to get the user from mongo by id?
    // null is for errors
    console.log('deserialize the user');
    done(null, user);
  });
  app.use(express.static(config.rooPath+'/dist'));
  app.get('/api/customers/getall', auth.requiresRole('admin'), customer.getAllCustomers);
  app.post('/api/customers/create', auth.requiresRole('admin'), customer.createCustomer);
  app.post('/api/customers/delete', auth.requiresRole('admin'), customer.deleteCustomer);
  app.get('/api/customers/detail', auth.requiresRole('admin'), customer.getCustomer);
  app.post('/api/customers/savecustomer', auth.requiresRole('admin'), customer.updateCustomer);
  app.get('/api/hello', auth.hello);
  app.post('/api/login',auth.authenticate);
  app.post('/api/reset/password/debut', auth.resetPassword);
  app.post('/api/account/signup', user.signup);
  app.post('/api/password/reset', user.resetPassword);
  app.get('/api/users/getall', auth.requiresRole('admin'), users.getAllUser);
  app.post('/api/save/customers/list', auth.requiresRole('admin'), customer.updateCustomerList);
  app.get('/api/profile/details', auth.requiresAnyRole('customer,user'), profile.getCustomerDetail);
  app.post('/api/profile/details/update', auth.requiresAnyRole('customer,user'), profile.updateProfile);
  app.get('/api/training/equipment', auth.requiresAnyRole('customer,user'), purchaseTraining.getPurchaseTrainingCategory);
  app.get('/api/training/equipment/category', auth.requiresAnyRole('customer,user'), purchaseTraining.getEquipmentCategory);
  app.get('/api/training/equipment/type', auth.requiresAnyRole('customer,user'), purchaseTraining.getEquipmentTypes);
  app.get('/api/training/equipment/list', auth.requiresAnyRole('customer,user'), purchaseTraining.getEquipmentData);
  app.get('/api/training/start/detail', auth.requiresAnyRole('customer,user'), purchaseTraining.getStartTrainigDetail);
  app.post('/api/update/user/training', auth.requiresRole('customer'), employeeTraining.updateEmployeeTraining);

  app.get('/api/employee/getall', auth.requiresRole('customer'), employee.getAllEmployee);
  app.get('/api/training-library/getall', auth.requiresAnyRole('admin,customer'), trainingDetails.getAllTrainingDetails);
  app.post('/api/training-library/many', auth.requiresRole('admin'), trainingDetails.saveTrainingList);
  app.post('/api/training-library', auth.requiresRole('admin'), trainingDetails.createTrainingLibrary);
  app.post('/api/training-library/delete', auth.requiresRole('admin'), trainingDetails.removeTrainingLibrary)
  app.post('/api/user/update',auth.requiresRole('customer'), employee.saveUserList );
  app.post('/api/user/create', auth.requiresRole('customer'), employee.createEmployee);
  app.post('/api/user/remove', auth.requiresRole('customer'), employee.removeEmployee);
  app.post('/api/user/detail', auth.requiresRole('customer'), employee.getUserDetails);
  app.post('/api/user/training', auth.requiresAnyRole('customer,user'), employeeTraining.getEmployeeTrainingByEmployee);
  app.post('/api/purchase/training', auth.requiresRole('customer'), purchaseTraining.savePurchaseTraining);

  app.use(express.static(path.join(__dirname, '../../dist')));
	app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
  });


  // app.post('/api/signup', function(req, res) {
  //   var payload = req.body;
  //   var email = payload.email;
  //   var credits = payload.credits;
  //   var secretKey = '46443c94-16f3-400d-98cb-b46547193155';

  //   console.log(payload);
  //   res.send({status: 'ok', email: email, role: 'admin', name: 'Kiran', key: secretKey});
  // });

	// app.post('/api/signup/verify', function(req, res) {
  //   var payload = req.body;
  //   var password = payload.password;
  //   var key = payload.key;
  //   console.log(payload);
  //   res.send({status: 'ok', email: 'smitbaranwal@gmail.com', role: 'admin', name: 'Kiran'});
  // });

}

