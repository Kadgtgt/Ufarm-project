const express = require("express");
const app = express();
const router = express.Router();

// importing model
const Officer = require("../model/User");

router.get("/", (req, res) => {
	res.render("aOreg");
});

router.post("/", (req, res) => {
	console.log(req.body);
	const davis = new Officer({
		fname: req.body.fName,
		lname: req.body.lName,
		uniqueNo: req.body.uniqueNo,
		tel: req.body.tel,
		email: req.body.email,
		password: req.body.password,
	});
	davis.save();
	res.send("user registered");
});

module.exports = router;
