var mongoose = require("mongoose");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = mongoose.model('User');

module.exports = function() {
    /*Authentication Mechanism Start*/
    console.log('Configuring Passort local authentication strategy');
    passport.use(new LocalStrategy(
      function(username,password,done) {
          //TODO - Remove the salt and pwd from user object before sending it to client side
          User.findOne({email:username}).exec(function(error,user) {
            console.log('User ->', user);
              if(user && user.authenticate(password)) {
                  return done(null,user);
              } else {
                  return done(null, false);
              }
          })
      }
  ));
}
