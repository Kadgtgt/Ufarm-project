const express = require("express");
const router = express.Router();
const multer = require("multer");
// const connectEnsureLogin = require("connect-ensure-login");

// Importing Model
const Registration = require("../model/User");

// image upload
var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/uploads");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});


const UFProdUploads = require("../model/UrbanFarmerUpload");

router.get("/producelist", async (req, res) => {
	req.session.user = req.user;
	const urbanFarmerList = await UFProdUploads.find({ role: "UrbanFarmer" });
	console.log(urbanFarmerList);
	res.render("producelist", { products: urbanFarmerList, currentUser: req.session.user });
});

router.get("/producepage", async (req, res) => {
	const productsList = await UFProdUploads.find({ role: "UrbanFarmer" });
	console.log(productsList);
	res.render("productspage", { productsAvailable: productsList });
});

// instantiate variable upload to store multer functionality to upload image
var upload = multer({ storage: storage });

router.get("/produceupload", async (req, res) => {
	let urbanFarmerList = await Registration.find({ role: "UrbanFarmer" });
	res.render("produceUpload", { urbanfarmers: urbanFarmerList });
});

router.post("/produceupload", upload.single("prodImage"), async (req, res) => {
	console.log(req.body);
	try {
		const produce = new UFProdUploads(req.body);
		produce.prodImage = req.file.path;
		console.log("This is my produce", produce);
		await produce.save();
		res.redirect("/ufDashboard");
	} catch (error) {
		res.status(400).send("Can't save produce");
		console.log(error);
	}
});

// Updating Produce
router.get("/produce/update/:id", async (req, res) => {
	try {
		const updateProduct = await UFProdUploads.findOne({ _id: req.params.id });
		res.render("produceupdate", { product: updateProduct });
	} catch (error) {
		res.status(400).send("Unable to update produce");
	}
});

router.post("/produce/update", async (req, res) => {
	try {
		await UFProdUploads.findOneAndUpdate({ _id: req.query.id }, req.body);
		res.redirect("/producelist");
	} catch (error) {
		res.status(400).send("Unable to update produce");
	}
});

// Return approved list
router.get("/approvedList", async (req, res) => {
	try {
		const prodOrder = { _id: -1 };
		const approvedProducts = await UFProdUploads.find({ role: "UrbanFarmer" }).sort(prodOrder);
		console.log("this is your product", approvedProducts);
		res.render("approvedlist", { items: approvedProducts });
	} catch (error) {
		res.status(400).send("Unable to approve produce");
	}
});

// approve
router.get("/produce/approve/:id", async (req, res) => {
	try {
		const productsApproved = await UFProdUploads.findOne({ _id: req.params.id });
		res.render("approve", { products: productsApproved });
		// console.log("approve", approveProduct);
	} catch (error) {
		res.status(400).send("Unable to approve produce");
	}
});

router.post("/produce/approve", async (req, res) => {
	try {
		await UFProdUploads.findOneAndUpdate({ _id: req.query.id }, req.body);
		res.redirect("/producelist");
	} catch (error) {
		res.status(400).send("Unable to approve produce");
	}
});

// available produce get and post
router.get("/produce/available/:id", async (req, res) => {
	try {
		const saleProduct = await UFProdUploads.findOne({ _id: req.params.id });
		res.render("availability", { item: saleProduct });
		// console.log("Product approved", saleProduct);
	} catch (error) {
		res.status(400).send("unable to show produce Availability");
	}
});

router.post("/produce/available", async (req, res) => {
	try {
		await UFProdUploads.findOneAndUpdate({ _id: req.query.id }, req.body);
		res.redirect("/producelist");
	} catch (error) {
		res.status(400).send("Unable to see availability of produce");
	}
});

// Ordering list
router.get("/produce/order/:id", async (req, res) => {
	try {
		const saleProduct = await UFProdUploads.findOne({ _id: req.params.id });
		res.render("order", { item: saleProduct });
		// console.log("order list", saleProduct);
	} catch (error) {
		res.status(400).send("unable to show produce Availability");
	}
});

router.post("/produce/order", async (req, res) => {
	try {
		await UFProdUploads.findOneAndUpdate({ _id: req.query.id }, req.body);
		res.redirect("/homepage");
	} catch (error) {
		res.status(400).send("Order not successful");
	}
});

// Return order list
router.get("/orderlist", async (req, res) => {
	try {
		let ordered = await UFProdUploads.find({ role: "UrbanFarmer" });
		res.render("orderlist", { orders: ordered });
	} catch (error) {
		res.status(400).send("No booked product");
	}
});

router.post("/produce/delete", async (req, res) => {
	try {
		await UFProdUploads.deleteOne({ _id: req.body.id });
		res.redirect("back");
	} catch (error) {
		res.send(400).send("Sorry we were unable to delete product");
	}
});

router.get("/hortpage", async (req, res) => {
	const hortList = await UFProdUploads.find({ role: "UrbanFarmer" });
	console.log(hortList);
	res.render("horticulture", { hortProducts: hortList });
});

router.get("/poultrypage", async (req, res) => {
	const poultryList = await UFProdUploads.find({ role: "UrbanFarmer" });
	console.log(poultryList);
	res.render("poultry", { poultryProducts: poultryList });
});

router.get("/dairypage", async (req, res) => {
	const dairyList = await UFProdUploads.find({ role: "UrbanFarmer" });
	console.log(dairyList);
	res.render("dairy", { dairyProducts: dairyList });
});

module.exports = router;
