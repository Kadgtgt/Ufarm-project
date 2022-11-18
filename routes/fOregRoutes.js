const express = require("express");
const router = express.Router();

router.get("/for", (req, res) => {
	res.render("foRegistration");
});

// importing model
const Registration = require("../model/User");

router.post("/for", async (req, res) => {
	const register = new Registration(req.body);
	console.log(req.body);
	await Registration.register(register, req.body.password, (err) => {
		if (err) {
			res.status(400).render("foRegistration");
			console.log(err);
		} else {
			res.redirect("/folist");
		}
	});
});

// Updating  farmer one
router.get("/farmerone/update/:id", async (req, res) => {
	try {
		const updateFarmerOne = await Registration.findOne({ _id: req.params.id });
		res.render("farmeroneupdate", { farmerones: updateFarmerOne });
	} catch (error) {
		res.status(400).send("Unable to update farmerone");
	}
});

router.post("/farmerone/update", async (req, res) => {
	try {
		await Registration.findOneAndUpdate({ _id: req.query.id }, req.body);
		res.redirect("/folist");
	} catch (error) {
		res.status(400).send("Unable to update produce");
	}
});

// appointing farmer one ward
router.get("/farmerone/appoint/:id", async (req, res) => {
	try {
		const appointFarmerOne = await Registration.findOne({ _id: req.params.id });
		res.render("appointFarmerOne", { farmerones: appointFarmerOne });
	} catch (error) {
		res.status(400).send("Unable to appoint farmerone to any ward");
	}
});

router.post("/farmerone/appoint", async (req, res) => {
	try {
		await Registration.findOneAndUpdate({ _id: req.query.id }, req.body);
		res.redirect("/folist");
	} catch (error) {
		res.status(400).send("Unable to update produce");
	}
});

module.exports = router;
