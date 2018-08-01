var Customer = require("../models/Customers");

exports.getAllCustomers = function(req, res) {
  Customer.find({}).exec(function(error, customers) {
    if(error) {
      res.send({status: 0, code: 'ETC_0001', message: error.message, count: 0, customers: [] });
    } else {
      res.send({
        status: 1,
        code: 'SUCCESS',
        message: 'Customers retrieved successfully',
        count: customers.length,
        customers: customers
      })
    }
  })

}

exports.createCustomer = function(req, res) {
  var customer = req.body;

  Customer.create(customer, function(error) {
    if(error) {
      res.send({status: 0, code: 'ETC_0002', message: error.message, customers: {}});
    } else {
      res.send({
          status: 1,
          code: 'SUCCESS',
          message: 'Customer saved successfully',
          customer: customer
      })
    }
  })
}

exports.deleteCustomer = function(req, res) {
  var customer = req.body;
  console.log(req.body);
  Customer.remove({_id: customer._id}, function(error) {
    if(error) {
      res.send({status: 0, code: 'ETC_0003', message: error.message, customers: {}});
    } else {
      res.send({
        status: 1,
        code: 'SUCCESS',
        message: 'Customer removed successfully',
        customer: customer
    })
    }
  })
}

exports.getCustomer = function(req, res) {
  var custId = req.query._id;
  Customer.find({_id: custId}).exec(function(error, customer) {
    if(error) {
      res.send({status: 0, code: 'ETC_0004', message: error.message, selectedCustomer: {}});
    } else {

      res.send({
        status: 1,
        code: 'SUCCESS',
        message: 'Customer retirieved successfully',
        selectedCustomer: customer[0]
      })
    }
  })
}

exports.updateCustomer = function(req, res) {
  var cust = req.body.updatedCustomer;
  console.log(cust);
  Customer.update( {_id: cust._id}, cust, function(error) {
    if(error) {
      res.send({status: 0, code: 'ETC_0005', message: error.message, updatedCustomer: {}});
    } else {
      res.send({
        status: 1,
        code: 'SUCCESS',
        message: 'Customer updated successfully',
        updatedCustomer: cust
      });
    }
  })
}

exports.updateCustomerList = function(req, res) {
  var custList = req.body;
  console.log('into the customer list update');
  //console.log(Customer.find({}));
  for(let i=0;i<custList.length;i++){
    Customer.update( {_id: custList[i]._id}, custList[i], function(error) {
      if(error) {
        res.send({status: 0, code: 'ETC_0006', message: error.message, updatedCustomer: []});
      }else{
        if(i+1 == custList.length){
          Customer.find({}).exec(function(error, customers) {
            console.log('in find=====');
            if(error) {
              res.send({status: 0, code: 'ETC_0007', message: error.message, updatedCustomers: []});
            } else {
              res.send({
                status: 1,
                code: 'SUCCESS',
                message: 'Customer updated successfully',
                updatedCustomers: customers
              });
            }

          })
        }

      }
    })

  }
  console.log('after loop=====');

  /* Customer.updateMany(custList, function(error) {
    console.log('into the customer list update 11');


    if(error) {
      res.send({status: 0, code: 'ETC_0005', message: error.message, updatedCustomers: []});
    } else {
      let cust = [];
      Customer.find({}).exec(function(error, customers) {

        //console.log(customers);
        cust = customers;
        console.log('into the customer list update 123');
        console.log(cust);

      })
      console.log('into the customer list update 1234');
      console.log(cust);
      res.send({
        status: 1,
        code: 'SUCCESS',
        message: 'Customer updated successfully',
        updatedCustomers: cust
      });
    }
  }) */
}
