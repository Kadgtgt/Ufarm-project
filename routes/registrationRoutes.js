const express = require('express');
const router = express.Router();

// Importing Model
const Registration = require('../model/User');
const Officer = require('../model/User')

// router.get('/folist', (req, res) => {
//     res.render('signup');
// });

// router.post('/register', async (req, res) =>{
//     console.log(req.body);
//     try {
//         const user = new Registration(req.body);
//         let uniqueExist = await Registration.find({uniqueNo:req.body.uniqueNo});
//         let ninNumberExist = await Registration.findOne({ ninnumber: req.body.ninnumber });
//         if (uniqueExist) {
//             return res.status(400).send("Sorry this Number is already taken");
// 		} else if (ninNumberExist) {
//             return res.status(400).send("Sorry this NIN Number is already taken");
// 		} else {
// 			await Registration.register(user, req.body.password, (error) => {
// 				if (error) {
// 					throw error;
// 				}
// 				res.redirect("/register");
// 			});
// 		}
        
//     } catch (error) {
//         res.status(400).send('Sorry, it seems there is trouble accessing this page');
//         console.log(error);
//     }
// });

router.get("/folist", async (req, res) => {
    try {
        let items = await Officer.find({ role: "Agric Officer" });
        res.render("folist", {farmerones:items});
    } catch (error) {
        res.status(400).send("Unable to find Farmer Ones in the Database");
		console.log(error);
    }
	
});

// always the last line in the routes files.
module.exports = router;