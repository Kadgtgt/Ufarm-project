const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const registrationSchema = new mongoose.Schema({
	fName: {
		type: String,
	},

	lName: String,

	tel: String,

	email: {
		type: String,
	},

	role: {
		type: String,
	},

	uniqueNo: {
		type: String,
	},

	password: {
		type: String,
	},

	dor: {
		type: String,
	},

	activities:{
		type: String,
	},

	gender: {
		type: String,
	},
});
registrationSchema.plugin(passportLocalMongoose, {
	usernameField: "uniqueNo"
});

module.exports = mongoose.model("Registration", registrationSchema);
