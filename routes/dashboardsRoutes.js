const express = require("express");
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login");

// AO dashboard
// router.get("/aoDashboard", (req, res) => {
// 	res.render("aoDashboard");
// });

// FO dashboard
// router.get("/foDashboard", (req, res) => {
// 	res.render("foDashboard");
// });

// // UF dashboard ROUTE
// router.get("/ufDashboard", (req, res) => {
// 	res.render("ufDashboard");
// });

router.get("/aoDashboard", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
	req.session.user = req.user;
	if (req.user.role == "AgricOfficer") {
		res.render("aoDashboard", {currentUser:req.session.user});
	} else {
		res.send("this page is only accessed by the Agric Officer");
	}
});

// UF dashboard ROUTE
router.get("/ufDashboard", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
	req.session.user = req.user;
	if (req.user.role == "UrbanFarmer") {
		res.render("ufDashboard", {currentUser:req.session.user});
	} else {
		res.send("this page is only accessed by  Urban Farmer");
	}
});

router.get("/foDashboard", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
	req.session.user = req.body;
	if (req.user.role == "FarmerOne") {
		res.render("foDashboard", {currentUser:req.session.user});
	} else {
		res.send("only accessed by farmer one");
	}
});

module.exports = router;
