const express = require("express");
const router = express.Router();

// router.get("/ufg", (req, res) => {
// 	res.render("uFreg");
// });

// router.post("/ufg", async (req, res) => {
// 	const signup = new Registration(req.body);
// 	console.log(req.body);
// 	await Registration.register(signup, req.body.password, (err) => {
// 		if (err) {
// 			res.status(400).render("uFreg");
// 			console.log(err);
// 		} else {
// 			res.redirect("");
// 		}
// 	});
// });

router.get("/ufr", (req, res) => {
	res.render("ufRegistration");
});

// importing model
const Registration = require("../model/User");

router.post("/ufr", async (req, res) => {
	const register = new Registration(req.body);
	console.log(req.body);
	await Registration.register(register, req.body.uniqueNo, (err) => {
		if (err) {
			res.status(400).render("ufRegistration");
			console.log(err);
		} else {
			res.redirect("/uflist");
		}
	});
});

router.get("/uflist", async (req, res) => {
	try {
		let items = await Registration.find({ role: "UrbanFarmer" });
		console.log(items);
		res.render("uflist", { urbanfarmers: items });
	} catch (error) {
		res.status(400).send("unable to find urban farmer in the data base");
		console.log(error);
	}
});

module.exports = router;
