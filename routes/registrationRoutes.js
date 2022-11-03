const express = require("express");
const router = express.Router();

// Importing Model
const Registration = require("../model/User");

router.get("/folist", async (req, res) => {
	try {
		let items = await Registration.find({ role: "FarmerOne" });
		console.log(items);
		res.render("folist", { farmerones: items });
	} catch (error) {
		res.status(400).send("Unable to find Farmer Ones in the Database");
		console.log(error);
	}
});

// always the last line in the routes files.
module.exports = router;
