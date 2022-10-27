const express = require("express");
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login");

// AO dashboard
router.get("/aoDashboard",connectEnsureLogin.ensureLoggedIn(), (req, res) => {
	res.render("trial");
});

// FO dashboard
router.get("/fODashboard", (req, res) => {
	res.render("foDashboard");
});

// UF dashboard ROUTE
router.get("/ufDashboard", (req, res) => {
	res.render("ufDashboard");
});

// UF dashboard ROUTE
router.get("/ufDashboard", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
	req.session.user = req.user;
	if (req.user.role == "Urban Farmer") {
		res.render("ufDashboard");
	} else {
		res.send("this page is only accessed by  Urban Farmer");
	}
});

module.exports = router;
