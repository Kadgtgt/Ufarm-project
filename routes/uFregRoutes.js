const express = require("express");
const router = express.Router();

// importing model
const Registration = require("../model/User");

router.get("/ufg", (req, res) => {
	res.render("uFreg");
});

router.post("/uf", async (req, res) => {
	const signup = new Registration(req.body);
	console.log(req.body);
	await Registration.register(signup, req.body.password, (err) => {
		if (err) {
			res.status(400).render("uFreg");
			console.log(err);
		} else {
			res.redirect("");
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

module.exports = router;
