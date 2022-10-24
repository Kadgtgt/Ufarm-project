const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const userSchema = new mongoose.Schema({
	userName: {
		type: String,
		require: true,
	},
	SupplierId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Registration",
		require: true,
	},

	uniqueNo: {
		type: String,
		require: true,
		trim: true,
	},

	regDate: {
		type: Date,
		require: true,
		trim: true,
	},
	prodCategory: {
		type: String,
		require: true,
	},
	prodName: {
		type: String,
		require: true,
		trim: true,
	},
	prodImage: {
		type: String,
		require: true,
		trim: true,
	},
	wardName: {
		type: String,
		require: true,
		trim: true,
	},
	prodType: {
		type: String,
		require: true,
		trim: true,
	},
	prodQuantity: {
		type: String,
		require: true,
		trim: true,
	},
	paymentMode: {
		type: String,
		require: true,
		trim: true,
	},
	deliveryMode: {
		type: String,
		require: true,
		trim: true,
	},
	direction: {
		type: String,
		require: true,
		trim: true,
	},
	price: {
		type: String,
		require: true,
		trim: true,
	},
	status: {
		type: String,
		default: "pending",
		enum: ["pending", "approved"],
	},

	availability: {
		type: String,
		default: "available",
		enum: ["available", "booked", "N/A"],
	},
});

module.exports = mongoose.model("UFProdUploads", userSchema);
