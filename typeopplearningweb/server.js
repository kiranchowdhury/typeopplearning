var express = require("express");
var http = require('http');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
console.log('Kick starting the app in env = '+env)
var port = (process.env.PORT || '8000');

/*Creating the APP*/
var app = express();
app.set('port', port);
/*Configuring the APP - Start*/
var config = require('./server/config/config')[env];
require('./server/config/express')(app,config);
 require('./server/config/mongoose')(config);
  require('./server/config/passport')();
// require('./server/config/routes')(app, config);
// app.listen(config.port, config.host);

var server = http.createServer(app);
server.listen(port);

console.log('Typeopplearning running in port =' + port);






// var express = require('express');

// var env = process.env.NODE_ENV || 'development';
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// console.log('Starting the app in '+env+' mode');
// var app = express();
// var config = require('./server/config/config')[env];
// require('./server/config/express')(app,config);
// require('./server/config/routes')(app);
