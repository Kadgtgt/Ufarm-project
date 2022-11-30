const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
	firstName: {
		type: String,
	},

	lastName: String,

	Email: {
		type: String,
	},

	Tel: {
		type:String,
	},

	txtMsg: {
		type:String,
	},
});

module.exports = mongoose.model("CustomerMsg", customerSchema);
