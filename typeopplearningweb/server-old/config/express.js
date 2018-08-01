const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var uuid = require('uuid');
var nJwt = require('njwt');
// var jwt    = require('jsonwebtoken');
var superagent = require('superagent');
var conf = require('../config/config');
var rootPath = path.normalize(__dirname+'/../../');
var fs = require('fs');


//const api = require('../config/routes');
var restcontroller = require('../controller/eprestcontroller');


module.exports = function(app, config) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, '../../dist')));
  app.post('/api/login', function(req, res) {
    var payload = req.body;
  //  var backendServer = payload.env;
    var email = payload.email;
    var pwd = payload.password;
    var secretKey = '46443c94-16f3-400d-98cb-b46547193155';
    var token = generateToken(email, pwd, secretKey);
    res.send({token: token, email: email, role: 'admin', name: 'Kiran Chowdhury'});
  //  var apiUrl = conf[backendServer].apiUrl;
  //  var certPath = conf[backendServer].certPath;
 //   var cert = fs.readFileSync(certPath);
    // superagent.get(apiUrl+'/api/rest/get?apiid=getAuthGroup&methodname=getIBMAuthorizedGroup')
    // .auth(email, pwd)
    // .cert(cert)
    // .end((error, api_resp) => {
    //   if(error) {
    //     res.send({status: "0", message: 'Login Error - Invalid Credential', items: [{isAuthenticated: false}]});
    //   } else if(api_resp.status === 200){
    //     var secretKey = conf[backendServer].secret;

    //     var token = generateToken(email, pwd, secretKey);
    //     res.send({token: token});
    //   } else if(api_resp.status === 401) {
    //     res.send({status: "0", message: 'HTTP_RESPONSE_CODE_UNAUTHORIZED', items: [{isAuthenticated: false}]});
    //   } else if(api_resp.status === 400) {
    //     res.send({status: "0", message: 'HTTP_RESPONSE_CODE_NOT_FOUND', items: [{isAuthenticated: false}]});
    //   } else if(api_resp.status === 500) {
    //     res.send({status: "0", message: 'HTTP_RESPONSE_CODE_INTERNAL_SERVER_ERROR', items: [{isAuthenticated: false}]});
    //   }
    // });
  });

  generateToken = function(userid, key, secretKey) {

    var claims = {
      sub: userid,
      iss: 'https://www.ibm.com',
      permissions: key
    };
    var jwt = nJwt.create(claims,secretKey);
   // console.log(jwt);
    var token = jwt.compact();
   // console.log(token);
    return token;
  }

// ---------------------------------------------------------
// route middleware to authenticate and check token
// ---------------------------------------------------------
// app.use(function(req, res, next){
//   // check header or url parameters or post parameters for token
//   var token = req.body.token || req.query.token || req.headers['x-access-token'];
//   var env = req.body.env || req.query.env || req.headers['x-backend-env'];
//   // console.log('ENV ', env);
//   // console.log('TOKEN ', token);
//   // console.log('ENV SECRET ', conf[env].secret);
//   // decode token
//   if(token) {
//    // var backendServer = payload.env;
//     // verifies secret and checks exp
//     var secretKey = '46443c94-16f3-400d-98cb-b46547193155';
//     nJwt.verify(token,secretKey,function(err,verifiedToken){
//       if(err){
//         console.log('VERIFY ERROR ', err);
//         return res.json({ status:'0', message: 'HTTP_RESPONSE_CODE_UNAUTHORIZED', items:[] });
//       }else{
//         req.jwtPayload = verifiedToken;
//         next();
//       }
//     });
//   } else {
//     return res.json({ status:'0', message: 'TOKEN_NOT_PROVIDED', items:[] });
//   }
// });

  //set up api routes
  //app.use('/api', api);
  app.get('/api/customers/getall', restcontroller.getCustomers);
  app.get('/api/training-library/getall', restcontroller.getAllTrainingLibrary);
  app.post('/api/customers/create', restcontroller.createCustomer);
  app.get('/api/invoice/list', restcontroller.getInvoiceList);
  app.get('/api/training/equipment', restcontroller.getTrainingEquipmentCategory);
  app.post('/api/post', restcontroller.doPost);
  app.get('/api/get', restcontroller.doGet);
  app.post('/api/post', restcontroller.doPost);
  app.get('/api/certificate/getall', restcontroller.getAllCertificates);
  app.get('/api/profile/details', restcontroller.getProfileDetails);
  app.get('/api/user/getall', restcontroller.getUserList);
  app.post('/api/user/create', restcontroller.createUser);
  app.post('/api/user/remove', restcontroller.removeUser);
  app.get('/api/training/equipment/type', restcontroller.getEquipmentTypes);
  app.get('/api/training/equipment/list', restcontroller.getEquipmentList);
  app.get('/api/subscription/training/equipment', restcontroller.getSubscriptionTrainingCat);
  app.get('/api/user/detail', restcontroller.getUserDetail);
  app.get('/api/user/training', restcontroller.getUserTraining);
  app.get('/api/training/start/detail', restcontroller.getTrainingStartDetail);
  app.get('/api/customers/detail', restcontroller.getCustomerDetail);
  app.get('/api/customers/budget/detail', restcontroller.getCustomerBudgetDetail);


//	Catch all other routes and return the index file
	app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
  });
	/**
	 * Get port from environment and store in Express.
	 */
  const port = process.env.PORT || 3030;
  const host = process.env.IP || 'localhost';

  app.set('port', port);
	/**
	 * Create HTTP server.
	 */
  const server = http.createServer(app);
	/**
	 * Listen on provided port, on all network interfaces.
	 */

  // server.listen(port, host ,() => console.log(`API running on localhost:${port}`));
  // server.listen(port, () => console.log(`API running on:${port}`));
  server.listen(port, function(){
    var port = server.address().port;
    console.log("App now running on port", port);
  });
};
