const express = require("express");
const router = express.Router();

// Importing Model
const CustomerMsg = require("../model/customer");

router.post("/message", async (req, res) => {
	console.log(req.body);
	try {
		const textMessage = new CustomerMsg(req.body);
		console.log("message sent", textMessage);
		await textMessage.save();
		res.redirect("/contactpage");
	} catch (error) {
		res.status(400).send("Can't send message");
		console.log(error);
	}
});

module.exports = router;
