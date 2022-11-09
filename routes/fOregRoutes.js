const express = require("express");
const router = express.Router();

router.get("/for", (req, res) => {
	res.render("foRegistration");
});

// importing model
const Registration = require("../model/User");

router.post("/for", async (req, res) => {
	const register = new Registration(req.body);
	console.log(req.body);
	await Registration.register(register, req.body.password, (err) => {
		if (err) {
			res.status(400).render("forRegistration");
			console.log(err);
		} else {
			res.redirect("/folist");
		}
	});
});

// router.post("/for", async (req, res) => {
// 	console.log(req.body);
// 	try {
// 		const register = new Registration(req.body);
// 		let uniqueNoExist = await Registration.findOne({ uniqueNo: req.body.uniqueNo });
// 		let ninNumberExist = await Registration.findOne({ ninNo: req.body.ninNo });
// 		if (uniqueNoExist) {
// 			return res.status(400).send("Sorry this Unique Number is already taken");
// 		} else if (ninNumberExist) {
// 			return res.status(400).send("Sorry this NIN Number is already taken");
// 		} else {
// 			await Registration.register(register, req.body.passsword, (error) => {
// 				if (error) {
// 					throw error;
// 				}
// 				res.redirect("/login");
// 			});
// 		}
// 	} catch (error) {
// 		res.status(400).send("Sorry, it seems there is trouble accessing this page");
// 		console.log(error);
// 	}
// });

// Updating  farmer one
router.get("/farmerone/update/:id", async (req, res) => {
	try {
		const updateFarmerOne = await Registration.findOne({ _id: req.params.id });
		res.render("farmeroneupdate", { farmerones: updateFarmerOne });
	} catch (error) {
		res.status(400).send("Unable to update farmerone");
	}
});

router.post("/farmerone/update", async (req, res) => {
	try {
		await Registration.findOneAndUpdate({ _id: req.query.id }, req.body);
		res.redirect("/folist");
	} catch (error) {
		res.status(400).send("Unable to update produce");
	}
});

// // Farmer One Dashboard Route                                                        Notice in effecting the login that the authentication routes file and this route work together and important is Line 13 that specifies the role as it is in the name attribute of the role field in the signup form
// // In case two people can access, use || (or) in the if statement if (req.user.role == 'farmerone' || req.user.role == 'AgricOfficer');
// router.get("/foDashboard", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
// 	// // esures login to access farmer one area or dashboard
// 	req.session.user = req.user;
// 	if (req.user.role == "FarmerOne") {
// 		res.render("foDashboard");
// 	} else {
// 		res.send("This page is only accessible by Farmer One");
// 	}
// });

module.exports = router;
