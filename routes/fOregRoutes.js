const express = require("express");
const router = express.Router();

// importing model
const Registration = require("../model/User");

router.get("/fo", (req, res) => {
	res.render("fOreg");
});

router.post("/fo", async (req, res) => {
	const signup = new Registration(req.body);
	console.log(req.body);
	await Registration.register(signup, req.body.password, (err) => {
		if (err) {
			res.status(400).render("fOreg");
			console.log(err);
		} else {
			res.redirect("");
		}
	});
});


router.get("/for", (req, res) => {
	res.render("foRegistration");
});

router.post("/for", async (req, res) => {
	const register = new Registration(req.body);
	console.log(req.body);
	await Registration.register(register, req.body.uniqueNo, (err) => {
		if (err) {
			res.status(400).render("foRegistration");
			console.log(err);
		} else {
			res.redirect("/folist");
		}
	});
});

module.exports = router;
