const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const officerSchema = new mongoose.Schema({
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

	gender: {
		type: String,
	},
});
officerSchema.plugin(passportLocalMongoose, {
	usernameField: "password",
});

module.exports = mongoose.model("Officer", officerSchema);
