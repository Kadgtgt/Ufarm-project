const express = require("express");
const router = express.Router();

// router.get("/ao", (req, res) => {
// 	res.render("aOreg");
// });


// router.post("/ao", async (req, res) => {
// 	const signup = new Registration(req.body);
// 	console.log(req.body);
// 	await Registration.register(signup, req.body.password, (err) => {
// 		if (err) {
// 			res.status(400).render("aOreg");
// 			console.log(err);
// 		} else {
// 			res.redirect("/login ");
// 		}
// 	});
// });

// router.post("/ao", (req, res) => {
// 	console.log(req.body);
// 	const davis = new Registration({
// 		fName: req.body.fName,
// 		lName: req.body.lName,
// 		uniqueNo: req.body.uniqueNo,
// 		tel: req.body.tel,
// 		role: req.body.role,
// 		dor: req.body.dor,
// 		gender: req.body.gender,
// 		email: req.body.email,
// 		password: req.body.password,
// 	});
// 	davis.save();
// 	res.send("user registered");
// });

router.get("/aor", (req, res) => {
	res.render("aoRegistration");
});


// importing model
const Registration = require("../model/User");

router.post("/aor", async (req, res) => {
	const register = new Registration(req.body);
	console.log(req.body);
	await Registration.register(register, req.body.uniqueNo, (err) => {
		if (err) {
			res.status(400).render("aoRegistration");
			console.log(err);
		} else {
			res.redirect("/login");
		}
	});
});

router.get("/", (req, res) => {
	res.render("landingpage");
});

router.get("/homepage", (req, res) => {
	res.render("homepage");
});

router.get("/admins", (req, res) => {
	res.render("admins");
});

router.get("/productspage", (req, res) => {
	res.render("productspage");
});

// router.get("/reports", connectEnsureLogin.ensureLoggedIn(), async(req, res) => {
//     req.session.user = req.user;
//     if(req.user.role == 'AgricOfficer'){
//         try {
            
//             // New
//             // instantiate a crop variable you will use to select a crop.
//             let selectedProduce;
//             if (req.query.searchProduce)
//                 selectedProduce = req.query.searchProduce
//             // Query for returning all tonnage and revenue of a produce
//             let items = await Produce.find({prodname:selectedProduce});

//             // console.log("products from the db", goods)
//             console.log("products from the db after search", items)


//             // New
//             let totalCrop = await Produce.aggregate([
//                 { $match: { prodname: selectedProduce } },
//                 { $group: { _id: "$prodname", 
//                 totalQuantity: { $sum: "$quantity" },
//                 totalCost: { $sum: { $multiply: [ "$unitprice", "$quantity" ] } },
// 				console.log("Crop collections", totalCrop),
// 				res.render("reports", { 
// 				title: 'Reports', 
// 				products:items,
// 				totalC:totalCrop[0]});
// 			} catch (error) {
// 				res.status(400).send("unable to find items in the database");
// 				console.log (error)
// 			}
// 		}else {
// 			res.send("This page is only accessed by Agric Officers")
// 		},
// });
module.exports = router;
