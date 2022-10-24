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

// UF dashboard ROUTE
router.get("/ufDashboard", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
	req.session.user = req.user; 
	if (req.user.role == 'Urban Farmer') {
		res.render("ufDashboard");
	}else {
		res.send('this page is only accessed by  Urban Farmer');
	}
});

router.post("/aoDashboard", (req, res) => {
	res.redirect();
});

router.post("/foDashboard", (req, res) => {
	res.redirect();
});

router.post("/ufDashboard", (req, res) => {
	res.redirect();
});


module.exports = router;
