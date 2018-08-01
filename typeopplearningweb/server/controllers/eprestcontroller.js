var superagent = require('superagent');
var config = require('../config/config');
var https = require('https');
var path = require('path');
var fs = require('fs');
var jwt    = require('jsonwebtoken');
var rootPath = path.normalize(__dirname+'/../../');
// var mongoose = require('mongoose');
User = require('../model/user');

exports.doGet = function(req, res) {
  var queryString = req.query;
  var backendServer = req.headers['x-backend-env'];
  var token = req.jwtPayload;
  console.log('TOKEN IS', token)
  var apiUrl = config[backendServer].apiUrl;
  var certPath = config[backendServer].certPath;
  var cert = fs.readFileSync(certPath);
  var id = token.body.sub;
  var pwd = token.body.permissions;
  console.log('ID AND PWD IS' + id +' & '+pwd);
  console.log("Query String is ", req.query);

    superagent.get(apiUrl+'/api/rest/get')
    .auth(id,pwd)
    .cert(cert)
    .query(req.query)
    .set('Accept', 'application/json')
    .set('X-Force-Content-Type', 'application/json')
    .set('X-Context-geo', req.headers['x-context-geo'])
    .set('X-Context-Group', req.headers['x-context-group'])
    .set('X-Context-Id', req.headers['x-context-id'])
    .end((err, api_res)=> {
      if(err) {
        console.log("Error from API", api_res.status);
        res.send({status: "0", message: 'ET_000', items: []});
      } else {
        console.log("HTTP STATUS CODE = "+api_res.status);
        res.send(api_res.body);
      }
    });
};

exports.doPost = function(req, res) {
  // superagent.post('http://localhost:9080/services/epricer/v2/ibm/api/rest/post')
  // .auth('kiranchowdhury@in.ibm.com','********')
  // .send(req.body)
  // .set('accept','json')
  // .end((err, apiresp)=>{
  //   console.log("Raw Response", apiresp.body);
  //   //console.log("Response from ePricer", JSON.stringify(apiresp.body));
  //   res.send(apiresp.body);
  // });

};


/*
* MOCK DATA SERVICE --- For which back end services are not ready yet
*/

exports.getCustomers = function(req, res) {
 // console.log('Get Customers Api Called');
//  var customers = createDummyCustomers();
//  var mongoUsers = mongoose.Model('User');
//  console.log('mongo user', mongoUsers);
//  mongoUsers.find()
//  .then(function (doc) {
//    console.log('doc==', doc);
//  });
var resp = {
  status: 1,
  code: 'OK',
  message: 'success',
  // customers: customers,
  // count: customers.length
}
User.getUsers(function (err, users) {
  console.log('users', users);
  resp.customers = users;
  resp.count = users.length
  res.send(resp);
});

  // res.send(resp);
}

exports.createCustomer = function(req, res) {
  console.log('Createting customer', req.body);
  var resp = {
    status: 1,
    code: 'OK',
    message: 'success',
    // customer: req.body
  }
  User.createUser(req.body, function (err, user) {
    console.log('response creating cutomer: ', user);
    if(err){
      resp = {
        status: 0,
        code: 'Error',
        message: 'Failed to save customer data'
      }
    }
    else {
      resp.customer = user;
    }
    res.send(resp);
  });
  }

  exports.removeCustomer = function(req, res) {
    var resp = {
      status: 1,
      code: 'OK',
      message: 'success',
      customer: req.body
    }
    res.send(resp);
  }

exports.getAllTrainingLibrary = function(req, res) {
 // console.log('Get getAllTrainingLibrary Api Called');
  var trainingLibrary = createDummyTrainingLibrary();
  var resp = {
    status: 1,
    code: 'OK',
    message: 'success',
    trainingLibrary: trainingLibrary,
    count: trainingLibrary.length
  }
  res.send(resp);
}

exports.getInvoiceList = function(req, res) {
  // console.log('Get getAllTrainingLibrary Api Called');
   var invoiceList = createDummyInvoiceList();
   var resp = {
     status: 1,
     code: 'OK',
     message: 'success',
     invoiceList: invoiceList,
     count: invoiceList.length
   }
   res.send(resp);
 }

 exports.getTrainingEquipmentCategory = function(req, res) {
  // console.log('Get getAllTrainingLibrary Api Called');
   var equipmentList = createDummyEquipmentCategory();
   var resp = {
     status: 1,
     code: 'OK',
     message: 'success',
     equipmentList: equipmentList,
     count: equipmentList.length
   }
   res.send(resp);
 }

exports.getAllCertificates = function(req, res) {
  var certificateList = createDummyCertificates();
  console.log('====creating certificate response==');
  var resp = {
    status: 1,
    code: 'OK',
    message: 'success',
    certificates: certificateList,
    count: certificateList.length
  }

  res.send(resp);
}

exports.getProfileDetails = function (req, res) {
  console.log('creating profile details');
  var resp = {
    id: 1231,
    fullName: 'Kiran Chowdhary',
    profileImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJqWtCdNAfCdf3FhiqZ6ebvFw1bfCLYSTvIKwWDn0Yea58VnK',
    email: 'kiran.soft@gmail.com',
    phone: '77173267239',
    address: 'G-145, Damlur',
    specialCredits: 'XYZ',
    status: 1
  }
  res.send(resp);
}

exports.getUserList = function (req, res) {
  console.log('creating user list');
  var userList = createDummyUserList();
  var resp = {
    status: 1,
    code: 'OK',
    message: 'success',
    userList: userList,
    count: userList.length
  }
  res.send(resp);
}

exports.createUser = function(req, res) {
  console.log('Creating user', req.body);
  var resp = {
    status: 1,
    code: 'OK',
    message: 'success',
    user: req.body
  }
  res.send(resp);
  }

  exports.removeUser = function(req, res) {
    console.log('Removing User', req);
    var resp = {
      status: 1,
      code: 'OK',
      message: 'success',
      user: req.body.user
    }
    res.send(resp);
  }

  exports.getEquipmentTypes = function (req, res) {

    var payload = req.query;
    var equipmentCat = payload.equipmentCat;
    //console.log(equipmentCat);

    var equipmentTypes = createDummyEquipmentType(equipmentCat);
    var resp = {
      status: 1,
      code: 'OK',
      message: 'success',
      equipmentType: equipmentTypes,
      count: equipmentTypes.length
    }
     //console.log(resp);
    res.send(resp);

  }

  exports.getEquipmentList = function (req, res) {

    var payload = req.query;
    var equipmentType = payload.equipmentType;
    var equimentId = payload.equipmentId;
    var equipmentList = createDummyEquipmentList(equipmentType);
    var resp = {
      status: 1,
      code: 'OK',
      message: 'success',
      equipmentData: equipmentList,
      count: equipmentList.length
    }
     //console.log(resp);
    res.send(resp);

  }
  exports.getSubscriptionTrainingCat = function(req, res){

    var equipmentCategory = createDummySubsTrnCategory();
    var resp = {
      status: 1,
      code: 'OK',
      message: 'success',
      equipmentCat: equipmentCategory,
      count: equipmentCategory.length
    }
    res.send(resp);
  }
  exports.getUserDetail = function(req, res){

    var payload = req.query;

    var userDetail = createDummyUserDetail(payload.fullName);
    var resp = {
      status: 1,
      code: 'OK',
      message: 'success',
      userDetail: userDetail

    }
    res.send(resp);
  }

  exports.getUserTraining = function(req, res){

    var payload = req.query;

    var userTraining = createDummyUserTraining(payload.fullName);
    var resp = {
      status: 1,
      code: 'OK',
      message: 'success',
      userTrainingStatus: userTraining

    }
    res.send(resp);
  }

  exports.getTrainingStartDetail = function(req, res){

    var payload = req.query;

    var equimentDetail = createDummyTrainingStartDetail(payload.equipmentId);
    var resp = {
      status: 1,
      code: 'OK',
      message: 'success',
      equipmentDetail: equimentDetail

    }
    res.send(resp);
  }

  exports.getCustomerDetail = function(req, res){

    var payload = req.query;

    var customerDetail = createDummyCustomerDetail(payload.customerName);
    var resp = {
      status: 1,
      code: 'OK',
      message: 'success',
      customerDetail: customerDetail

    }
    res.send(resp);
  }

  exports.getCustomerBudgetDetail = function(req, res){

    var payload = req.query;

    var budgetDetail = createDummyCustomerBudgetDetail(payload.customerName);
    var remainingBudget = createDummyRemainingBudget(payload.customerName);
    var resp = {
      status: 1,
      code: 'OK',
      message: 'success',
      budgetDetail: budgetDetail,
      remainingBudget :remainingBudget
    }
    res.send(resp);
  }

createDummyCustomers = function(){
  customers = [];
  for(var i=0; i<100; i++) {
    customers.push({
      id: 'CustId-'+i,
      name: 'Cust Name-'+i,
      contactName: 'Cust Contact-'+i,
      noOfUsers: i*12,
      email: 'custemai_'+i+'@'+'Cust Name-'+i+'.com',
      phone: '00'+i+'1011',
      address: 'Cust Address-'+i,
      url: 'cust-name-'+i
    })
  }
  return customers;
}

createDummyTrainingLibrary = function(){
  let date = new Date();
  trainingLibrary = [];
  for(var i=0; i<100; i++) {
    trainingLibrary.push({
      id: 'id' + i,
      equipment: 'Equipment '+ i,
      trainingName: 'Training Name ' + i,
      date: date
    })
  }
  return trainingLibrary;
}

createDummyCertificates = function() {
  certificateList = [];
  for(var i=0; i<50; i++) {
    certificateList.push({
      id: 'crid-'+i,
      trainingName: 'Certificate for Training Name - '+i,
      status: 'passed'
    })
  }
  return certificateList;
}

createDummyUserList = function() {
  userList = [];
  for( var i=0; i<50; i++) {
    if(i%2 === 0){
      userList.push({
        fullName: 'Melisa Golubic',
        noOfTrainings: 29+i,
        status: 'waiting',
        userId: 'MG-'+i,
        url: 'Melisa Golubic'.replace(" ","-")
      })
    }
    else if(i%3 === 0){
      userList.push({
        fullName: 'Melisa Golubic',
        noOfTrainings: 29+i,
        status: 'passed',
        userId: 'MG-'+i,
        url: 'Melisa Golubic'.replace(" ","-")
      })
    }
    else {
      userList.push({
        fullName: 'Melisa Golubic',
        noOfTrainings: 29+i,
        status: 'in progress',
        userId: 'MG-'+i,
        url: 'Melisa Golubic'.replace(" ","-")
      })
    }
  }
  return userList;
}

createDummyInvoiceList = function(){
  let date = new Date();
  invoiceList = [];
  for(var i=0; i<100; i++) {
    let status = 'paid';
    if(i==0){
      status = 'sent';
    }else if(i==3){
      status='draft'
    }

    invoiceList.push({
      id: 'id' + i,
      invoiceNumber: i,
      invoiceDate: date ,
      invoiceTotal: i*100+50,
      dueDate : date,

      status : status
    })
  }
  return invoiceList;
}

createDummyEquipmentCategory = function(){
  equipmentCategories = [];
  let date = new Date();
  equipmentCategories.push({
    id : '1',
    name : 'Building / Construction Equipment',
    details : 'Equipment 01',
    icon: 'fa fa-ambulance',
    url : 'building-construction-equipment'
  })
  equipmentCategories.push({
    id : '2',
    name : 'Transportation',
    details : 'Equipment 02',
    icon: 'fa fa-taxi',
    url : 'transportation'
  })
  equipmentCategories.push({
    id : '3',
    name : 'Agriculture',
    details : 'Equipment 03',
    icon: 'fa fa-pagelines',
    url : 'agriculture'
  })
  equipmentCategories.push({
    id : '4',
    name : 'Industry',
    details : 'Equipment 04',
    icon: 'fa fa-industry',
    url: 'industry'
  })
  return equipmentCategories;
}

createDummyEquipmentType = function(selectedEquipmentCat){
  equipmentTypes = [];
  for(var i=0;i<10;i++){
    var id = 'equip-000'+i;
    equipmentTypes.push({
      id : id,
      equipmentType: selectedEquipmentCat+' equiment type '+id
    });
  }
  return equipmentTypes;
}

createDummyEquipmentList= function(selectedEquipmentType){
  equipmentList = [];
  for(var i=0;i<3;i++){
    var id = 'equipment-000'+i;
    equipmentList.push({
      id : id,
      equipmentName: selectedEquipmentType+', no: '+id,
      url: id
    });
  }
  return equipmentList;
}

createDummySubsTrnCategory = function(){
  equipmentCategories = [];
  let date = new Date();
  equipmentCategories.push({
    id : '1',
    trainingName : 'Building / Construction Equipment',
    equipment : 'Equipment 01',
    icon: 'fa fa-ambulance',
    url : 'building-construction-equipment'
  })
  equipmentCategories.push({
    id : '2',
    trainingName : 'Transportation',
    equipment : 'Equipment 02',
    icon: 'fa fa-taxi',
    url : 'transportation'
  })
  equipmentCategories.push({
    id : '3',
    trainingName : 'Agriculture',
    equipment : 'Equipment 03',
    icon: 'fa fa-pagelines',
    url : 'agriculture'
  })
  equipmentCategories.push({
    id : '4',
    trainingName : 'Industry',
    equipment : 'Equipment 04',
    icon: 'fa fa-industry',
    url: 'industry'
  })
  return equipmentCategories;
}

createDummyUserDetail = function(userFullName){
  userDetail = {
    fullName : userFullName,
    email : userFullName+"@mail.com",
    phone : "9876543210",
    address : "Sohna Road, Gurgoan",
  };
  return userDetail;
}

createDummyUserTraining = function(userFullName){
  userTraining = [];
  let trnName ="";
  for(var i=0;i<3;i++){
    if(i==0)
      trnName="Computer Architecture";
    else if(i==1){
      trnName="Introduction to solar cells";
    }else{
      trnName="Embedded System Software";
    }
    userTraining.push({
      id: 'trn-000'+i,
      trainingName : trnName,
      staus : "passed"
    })
  }

  return userTraining;
}

createDummyTrainingStartDetail = function(equimentId){
  trainingStartData = [];

  trainingStartData.push({
    title: '1. Overview of Material Handling',
    detail : 'A machine uses power to apply forces and control movement to perform an intended action. Machines can be driven by animals and people,'+
      'by natural forces such as wind and water, and by chemical, thermal, or electrical power, and include a system of mechanisms that shape the actuator input to achieve a specific application of'+
      'output forces and movement. They can also include computers and sensors that monitor performance and plan movement, often called mechanical systems.'+
      'Renaissance natural philosophers identified six simple machines which were the elementary devices that put a load into motion, and calculated the ratio of output force to input force, known today as mechanical advantage.'+
      'Modern machines are complex systems that consist of structural elements, mechanisms and control components and include interfaces for convenient use.'+
      'Examples include a wide range of vehicles, such as automobiles, boats and airplanes, appliances in the home and office,'+
      'building air handling and water handling systems, as well as farm machinery, machine tools and factory automation systems and robots.'
  })

  trainingStartData.push({
    title: '2. Design of MH Systems',
    detail : 'A machine uses power to apply forces and control movement to perform an intended action. Machines can be driven by animals and people,'+
      'by natural forces such as wind and water, and by chemical, thermal, or electrical power, and include a system of mechanisms that shape the actuator input to achieve a specific application of'+
      'output forces and movement. They can also include computers and sensors that monitor performance and plan movement, often called mechanical systems.'+
      'Renaissance natural philosophers identified six simple machines which were the elementary devices that put a load into motion, and calculated the ratio of output force to input force, known today as mechanical advantage.'+
      'Modern machines are complex systems that consist of structural elements, mechanisms and control components and include interfaces for convenient use.'+
      'Examples include a wide range of vehicles, such as automobiles, boats and airplanes, appliances in the home and office,'+
      'building air handling and water handling systems, as well as farm machinery, machine tools and factory automation systems and robots.'
  })

  trainingStartData.push({
    title: '3. Overview of Material Handling',
    detail : 'A machine uses power to apply forces and control movement to perform an intended action. Machines can be driven by animals and people,'+
      'by natural forces such as wind and water, and by chemical, thermal, or electrical power, and include a system of mechanisms that shape the actuator input to achieve a specific application of'+
      'output forces and movement. They can also include computers and sensors that monitor performance and plan movement, often called mechanical systems.'+
      'Renaissance natural philosophers identified six simple machines which were the elementary devices that put a load into motion, and calculated the ratio of output force to input force, known today as mechanical advantage.'+
      'Modern machines are complex systems that consist of structural elements, mechanisms and control components and include interfaces for convenient use.'+
      'Examples include a wide range of vehicles, such as automobiles, boats and airplanes, appliances in the home and office,'+
      'building air handling and water handling systems, as well as farm machinery, machine tools and factory automation systems and robots.'
  })

  trainingStartData.push({
    title: '4. Design of MH Systems',
    detail : 'A machine uses power to apply forces and control movement to perform an intended action. Machines can be driven by animals and people,'+
      'by natural forces such as wind and water, and by chemical, thermal, or electrical power, and include a system of mechanisms that shape the actuator input to achieve a specific application of'+
      'output forces and movement. They can also include computers and sensors that monitor performance and plan movement, often called mechanical systems.'+
      'Renaissance natural philosophers identified six simple machines which were the elementary devices that put a load into motion, and calculated the ratio of output force to input force, known today as mechanical advantage.'+
      'Modern machines are complex systems that consist of structural elements, mechanisms and control components and include interfaces for convenient use.'+
      'Examples include a wide range of vehicles, such as automobiles, boats and airplanes, appliances in the home and office,'+
      'building air handling and water handling systems, as well as farm machinery, machine tools and factory automation systems and robots.'
  })

  return trainingStartData;
}

createDummyCustomerDetail = function(customername){
  customerDetail = {
    customerName : customername,
    contactName : 'Thomas Hardy',
    email : 'thomas.hardy@company.com',
    phone: '+1 890 456 4164',
    address: 'Sohna Road, Gurgaon',
    users: '7',
    remainingBudget: '$10,000'
  };

  return customerDetail;
}

createDummyRemainingBudget = function(customerName){
  remainingBudget = {
    remainingBudget : '$10000'
  }
  return remainingBudget;
}
createDummyCustomerBudgetDetail = function(customername){
  let date = new Date();
  budgetDetail = [];
  for(i= 1; i<9; i++){
    budgetDetail.push({
      transactionId : "TRN-000-"+i,
      description : "Payment-000-"+i,
      type : "Payment",
      date : date,
      amount : '$1000'
    })
  }
  return budgetDetail;
}
