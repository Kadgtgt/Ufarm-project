const express = require("express");
const router = express.Router();
const multer = require("multer");
const connectEnsureLogin = require("connect-ensure-login");

// Importing Model
const UFProdUploads = require("../model/UrbanFarmerUpload");

// image upload
var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/uploads");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

// instantiate variable upload to store multer functionality to upload image
var upload = multer({ storage: storage });

router.get("/produceupload", (req,res)=>{
	res.render("produceUpload");
});

router.get("/uploadedproduce", async (req, res) => {
	const urbanFarmerList = await UFProdUploads.find({ role: "urbanfarmer" });
	console.log(urbanFarmerList);
	res.render("producelist", { products: urbanFarmerList });
});

// router.get("/uploadproduce", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
// 	// console.log("This is the Current User ", req.session.user);
// 	res.render("produce", { currentUser: req.session });
// });

router.post("/uploadedproduce", upload.single("prodImage"), async (req, res) => {
	console.log(req.body);
	try {
		const produce = new UFProdUploads(req.body);
		produce.prodImage = req.file.path;
		console.log("This is my produce", produce);
		await produce.save();
		res.redirect("/uploadproduce");
	} catch (error) {
		res.status(400).send("Can't save this image");
		console.log(error);
	}
});

router.get("/producelist", async (req, res) => {
	try {
		let products = await Produce.find();
		res.render("producelist", { products: products });
	} catch (error) {
		res.status(400).send("Unable to get Produce list");
	}
});

// Updating Produce
router.get("/produce/update/:id", async (req, res) => {
	try {
		const updateProduct = await Produce.findOne({ _id: req.params.id });
		res.render("produceupdate", { product: updateProduct });
	} catch (error) {
		res.status(400).send("Unable to update produce");
	}
});

router.post("/produce/update", async (req, res) => {
	try {
		await Produce.findOneAndUpdate({ _id: req.query.id }, req.body);
		res.redirect("/producelist");
	} catch (error) {
		res.status(400).send("Unable to update produce");
	}
});
// // Dashboard Route
// router.get("/UFdashboard", (req, res) => {
// 	res.render("dashboards/UF-dashboard");
// });

// approve
router.get("/produce/approve/:id", async (req, res) => {
	try {
		const updateProduct = await Produce.findOne({ _id: req.params.id });
		res.render("approve", { product: updateProduct });
		console.log("Produce approved", updateProduct);
	} catch (error) {
		res.status(400).send("Unable to approve produce");
	}
});

router.post("/produce/approve", async (req, res) => {
	try {
		await Produce.findOneAndUpdate({ _id: req.query.id }, req.body);
		res.redirect("producelist");
	} catch (error) {
		res.status(400).send("Unable to update produce");
	}
});

// available produce get and post
router.get("/produce/available/:id", async (req, res) => {
	try {
		const saleProduct = await UFProdUploads.findOne({ _id: req.params.id });
		res.render("availability", { item: updateProduct });
		console.log("Product approved", saleProduct);
	} catch (error) {
		res.status(400).send("Unable to approve produce");
	}
});

router.post("/produce/available", async (req, res) => {
	try {
		await Produce.findOneAndUpdate({ _id: req.query.id }, req.body);
		res.redirect("/producelist");
	} catch (error) {
		res.status(400).send("Unable to update produce");
	}
});

module.exports = router;
