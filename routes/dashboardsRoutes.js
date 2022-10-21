const express = require("express");
const router = express.Router();

// AO dashboard
router.get("/aoDashboard", (req, res) => {
	res.render("aoDashboard");
});

// FO dashboard
router.get("/foDashboard", (req, res) => {
	res.render("foDashboard");
});

// UF dashboard
router.get("/ufDashboard", (req, res) => {
	res.render("ufDashboard");
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
