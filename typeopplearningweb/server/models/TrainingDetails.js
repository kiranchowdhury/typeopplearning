var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var trainingDetailSchema = new Schema({
	name: {type: String, required: true},
	equipmentCategory: {type: String},
	equipmentIcon: {type: String},
	equipmentType: {type: String},
	date: {type: Date},
	manufacturer: {type: String},
	model: {type: String},
	document: {type: String}
});

var TrainingDetails = module.exports = mongoose.model("trainingdetails", trainingDetailSchema);

