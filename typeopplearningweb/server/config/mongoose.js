var mongoose = require("mongoose");
var path = require("path");
var rootPath = path.normalize(__dirname+'/../../');
var userModel = require(rootPath+"/server/models/Users");

// var userModel = require(rootPath+"/server/models/User");

module.exports = function(config) {
  /*Interaction with Mongo DB*/
  mongoose.connect(config.dburl);
  var con = mongoose.connection;
  con.once('open', function(){
    console.log('connection to mongo db is suuccessful!!!');
   // userModel.createRootUser();
  })
}
