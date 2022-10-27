const express = require("express");
const router = express.Router();

// importing model
const Registration = require("../model/User");

router.get("/ao", (req, res) => {
	res.render("aOreg");
});

router.post("/ao", async (req, res) => {
	const signup = new Registration(req.body);
	console.log(req.body);
	await Registration.register(signup, req.body.password, (err) => {
		if (err) {
			res.status(400).render("aOreg");
			console.log(err);
		} else {
			res.redirect("/folist ");
		}
	});
});

// router.post("/ao", (req, res) => {
// 	console.log(req.body);
// 	const davis = new Registration({
// 		fName: req.body.fName,
// 		lName: req.body.lName,
// 		uniqueNo: req.body.uniqueNo,
// 		tel: req.body.tel,
// 		role: req.body.role,
// 		dor: req.body.dor,
// 		gender: req.body.gender,
// 		email: req.body.email,
// 		password: req.body.password,
// 	});
// 	davis.save();
// 	res.send("user registered");
// });

router.get("/", (req, res) => {
	res.render("landingpage");
});

router.get("/homepage", (req, res) => {
	res.render("homepage");
});

router.get("/admins", (req, res) => {
	res.render("admins");
});

router.get("/productspage", (req, res) => {
	res.render("productspage");
});

module.exports = router;
