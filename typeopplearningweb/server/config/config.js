var path = require("path");
var rootPath = path.normalize(__dirname+'/../../');
module.exports = {
  development : {
    rootPath: rootPath,
    dburl:'mongodb://dbadmin:dbadmin123@ds261570.mlab.com:61570/test_typeopplearing',
    port:process.env.PORT || 3030,
    host:process.env.IP || 'localhost',
    secret: process.env.SECRET || '46443c94-16f3-400d-98cb-b46547193155'
},
production : {
    rootPath: rootPath,
    dburl:'mongodb://dbadmin:dbadmin123@ds261570.mlab.com:61570/prod_typeopplearing',
    port:process.env.PORT || 80,
    host:process.env.IP,
    secret: process.env.SECRET || 'de2dfc11-769a-4a06-a1eb-6393e4836838'
}
};
