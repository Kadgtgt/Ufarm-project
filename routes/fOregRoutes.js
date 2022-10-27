const express = require("express");
const router = express.Router();

// router.get("/fo", (req, res) => {
// 	res.render("fOreg");
// });

// router.post("/fo", async (req, res) => {
// 	const signup = new Registration(req.body);
// 	console.log(req.body);
// 	await Registration.register(signup, req.body.password, (err) => {
// 		if (err) {
// 			res.status(400).render("fOreg");
// 			console.log(err);
// 		} else {
// 			res.redirect("");
// 		}
// 	});
// });



router.get("/for", (req, res) => {
	res.render("foRegistration");
});

// importing model
const Registration = require("../model/User");


// router.post("/for", async (req, res) => {
// 	const register = new Registration(req.body);
// 	console.log(req.body);
// 	await Registration.register(register, req.body.uniqueNo, (err) => {
// 		if (err) {
// 			res.status(400).render("foRegistration");
// 			console.log(err);
// 		} else {
// 			res.redirect("/folist");
// 		}
// 	});
// });

router.post('/for', async (req, res) =>{
    console.log(req.body);
    try {
        const user = new Registration(req.body);
        let uniqueNoExist = await Registration.findOne({uniqueNo:req.body.uniqueNo});
        let ninNumberExist = await Registration.findOne({ ninNo: req.body.ninNo });
        if (uniqueNoExist) {
            return res.status(400).send("Sorry this Unique Number is already taken");
		} else if (ninNumberExist) {
            return res.status(400).send("Sorry this NIN Number is already taken");
		} else {
			await Registration.register(user, req.body.uniqueNumber, (error) => {
				if (error) {
					throw error;
				}
				res.redirect("/folist");
			});
		} 
        
    } catch (error) {
        res.status(400).send('Sorry, it seems there is trouble accessing this page');
        console.log(error);
    }
});

module.exports = router;
