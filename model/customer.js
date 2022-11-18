const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
	firstName: {
		type: String,
	},

	lastName: String,

	Email: {
		type: String,
	},

	Tel: String,

	txtMsg: String,
});

module.exports = mongoose.model("CustomerMsg", customerSchema);
