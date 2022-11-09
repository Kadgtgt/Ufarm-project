const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	supplierName: {
		type: String,
		require: true,
	},
	SupplierId: {
		type: String,
		require: true,
	},

	uniqueNo: {
		type: String,
		require: true,
	},

	regDate: {
		type: Date,
		require: true,
		trim: true,
	},
	prodCategory: {
		type: String,
	},
	prodName: {
		type: String,
		require: true,
	},
	prodImage: {
		type: String,
	},
	ward: {
		type: String,
		require: true,
	},
	prodType: {
		type: String,
		require: true,
		trim: true,
	},
	prodQuantity: {
		type: Number,
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
		type: Number,
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
