var Mongoose = require("mongoose");
var Schema = Mongoose.Schema;

var PurchaseTrainingSchema = new Schema({
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
    required: '{PATH} is required!'
  },
  trainingdetails: {
    type: Schema.Types.ObjectId,
    ref: 'trainingdetails',
    required: '{PATH} is required!'
  },
  purchasedate : {
    type : Date
  },
  status: {
    type: String
  },
  invoicenumber: {
    type : String
  }
});


var PurchaseTraining = module.exports = Mongoose.model('purchasetraining', PurchaseTrainingSchema, 'purchasetraining');
