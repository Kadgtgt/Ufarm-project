const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/login", (req, res) => {
	res.render("login");
});

router.post("/login", passport.authenticate("local", { failureRedirect: "/login" }), (req, res) => {
	req.session.user = req.user;
	console.log(req.user);
	// res.redirect("/folist");
	res.send("you have logged in");
});

router.post("/logout", (req, res) => {
	if (req.session) {
		req.session.destroy(function (err) {
			if (err) {
				res.status(400).send("Unable to logout");
			} else {
				return res.redirect("/login");
			}
		});
	}
});

// router.post("/login", passport.authenticate("local", { failureRedirect: "/login" }), (req, res) => {
// 	req.session.user = req.user;
// 	console.log("/folist",   req.session.user);
// 	res.redirect("/uploadproduce");
// 	});

module.exports = router;
