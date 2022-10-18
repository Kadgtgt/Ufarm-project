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

	uniqueNumber: {
		type: String,
	},

    password:{
        type:String
    }
});
officerSchema.plugin(passportLocalMongoose, {
	usernameField: "password",
});

module.exports = mongoose.model("Officer", officerSchema);
