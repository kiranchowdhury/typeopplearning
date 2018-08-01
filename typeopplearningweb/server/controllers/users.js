var Users = require("../models/Users");

exports.getAllUser = function (req, res) {
  console.log('getalluser'+req.user)
  Users.find({}).exec(function(error, users) {
    if(error) {
      res.send({status: 0, code: 'ETU_0001', message: error.message, count: 0, users: [] });
    } else {
      console.log('from schema=>',users)
      res.send({
        status: 1,
        code: 'SUCCESS',
        message: 'Customers retrieved successfully',
        count: users.length,
        userList: users
      })
    }
  });
}
