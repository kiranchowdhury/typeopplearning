var mongoose = require("mongoose");
var encrypt = require("../utils/encryption");
var Schema = mongoose.Schema;
var userSchema = mongoose.Schema({
   name : {type:String},
   email : {
       type:String,
       required:'{PATH} is required!',
       unique:true
   },
   salt:{type:String, required:'{PATH} is required!'},
   hashed_pwd:{type:String, required:'{PATH} is required!'},
   status:{type:String, required:'{PATH} is required!'}, //stats => 'A' - Active, 'D' - Deleted, 'I' - Inactive
   role:{type:String, required:'{PATH} is required!'}, // Customer => 'C', Admin => 'A', User => 'U'
   firstTimeLogin:{type: String}, // 'Y' -> should not allow to login
   specialCredits: {
     type: String
   },
   loginToken: {
     type: String
   }
  });

userSchema.methods= {
        authenticate : function(passwordToMatch) {
        return encrypt.hashPwd(this.salt,passwordToMatch) === this.hashed_pwd ;
        },
        isAdminUser : function() {
            return this.role==='A';
        },
        isCurrentUser : function(updateUser) {
            return this.username === updateUser.username;
        }
}

var User = module.exports = mongoose.model('User',userSchema);

exports.createRootUser = function() {
    User.find({}).exec(function(error,users) {
       if(users.length===0) {
            console.log('No root user exists.. Creating root user....');
           var salt = encrypt.createSalt();
           var password = encrypt.hashPwd(salt,'k0nnagar');
           User.create({
               name:'Kiran Chowdhury',
               email:'kiranchowdhury',
               salt:salt,
               hashed_pwd:password,
               status:'A',
               role:'A',
           });
           console.log('Root user created successfully!');
       } else {
           console.log('Root user already exists..aborting root user creation.')
       }
    });
}
