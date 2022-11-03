const express = require("express");
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login");

// AO dashboard
router.get("/aoDashboard", (req, res) => {
	res.render("aoDashboard");
});

// FO dashboard
router.get("/foDashboard", (req, res) => {
	res.render("foDashboard");
});

// // UF dashboard ROUTE
router.get("/ufDashboard", (req, res) => {
	res.render("ufDashboard");
});

// UF dashboard ROUTE
router.get("/ufDashboard", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
	req.session.user = req.user;
	if (req.user.role == "UrbanFarmer") {
		res.render("ufDashboard");
	} else {
		res.send("this page is only accessed by  Urban Farmer");
	}
});

router.get("/foDashboard", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
	req.session.user = req.body;
	if (req.user.role == "FarmerOne") {
		res.render("foDashboard");
	} else {
		res.send("only accessed by farmer one");
	}
});

module.exports = router;
