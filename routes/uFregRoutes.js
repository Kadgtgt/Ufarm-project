const express = require("express");
const router = express.Router();

// importing model
const Registration = require("../model/User");

router.get("/ufg", (req, res) => {
	res.render("uFreg");
});

router.post("/ufg", async (req, res) => {
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



module.exports = router;
