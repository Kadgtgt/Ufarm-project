const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/login", (req, res) => {
	res.render("login");
	// res.render("trial-login")
});

router.post("/login", passport.authenticate("local", { failureRedirect: "/homepage" }), (req, res) => {
	req.session.user = req.user;
	const user = req.session.user;
	console.log("This is the user", user.role);
	if (req.user.role == "AgricOfficer") {
		res.redirect("/aoDashboard");
	} else if (req.user.role == "FarmerOne") {
		res.redirect("/foDashboard");
	} else if (req.user.role == "UrbanFarmer") {
		res.redirect("/ufDashboard");
	} else {
		res.send("you are not a registered user");
	}
});
	

//    Logout route
router.post("/logout", (req, res) => {
	if (req.session) {
		req.session.destroy(function (err) {
			if (err) {
				res.status(400).send("Unable to logout,Please check your Internet connection");
			} else {
				return res.redirect("/index");
			}
		});
	}
});

router.get("/signup", (req, res) => {
	res.render("signup");
});

module.exports = router;
