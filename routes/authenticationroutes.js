// const express = require("express");
// const router = express.Router();
// const passport = require("passport");

// //  Login route
// router.get("/login", (req, res) => {
// 	res.render("login");
// });

// router.post("/login", passport.authenticate("local", { failureRedirect: "/login" }), (req, res) => {
// 	req.session.user = req.user;
// 	console.log("This is the current user", req.session.user);
// 	try {
// 		res.send("You have logged in");
// 	} catch (error) {
// 		console.log("you cant log in", error);
// 	}
// 	return true;

// 	if (req.user.role == "AgricOfficer") {
// 		res.redirect("/aoDashboard");
// 	} else if (req.user.role == "FarmerOne") {
// 		res.redirect("/foDashboard");
// 	} else if (req.user.role == "UrbanFarmer") {
// 		res.redirect("/ufDashboard");
// 	} else {
// 		res.send("Sorry either your session has expired or you are not a registered user.");
// 	}
// });

// //    Logout route
// router.post("/logout", (req, res) => {
// 	if (req.session) {
// 		req.session.destroy(function (err) {
// 			if (err) {
// 				res.status(400).send("Unable to logout,Please check your Internet connection");
// 			} else {
// 				return res.redirect("/index");
// 			}
// 		});
// 	}
// });

// module.exports = router;
