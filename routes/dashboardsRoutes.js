const express = require("express");
const model = require("mongoose");
const router = express.Router();

router.get("/aoDashboard", (req, res) => {
	res.render("aoDashboard");
});

router.get("/foDashboard", (req, res) => {
	res.render("foDashboard");
});

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
