// const express = require('express');
// const router = express.Router();
// // const connectEnsureLogin = require("connect-ensure-login");
// const UrbanFarmerUpload = require('../model/UrbanFarmerUpload');



// router.get("/report", async(req, res) => {
//     req.session.user = req.user;
//     if(req.user.role == 'UrbanFarmer'){
//         try {
//             let totalPoultry = await UrbanFarmerUpload.aggregate([
//             { $match: { prodcategory: "poultry" } },
//             { $group: { _id: "$prodname", 
//             totalQuantity: { $sum: "$quantity" },
//             totalCost: { $sum: { $multiply: [ "$unitprice", "$quantity" ] } },             
//             }}
//             ])

//             let totalHort = await UrbanFarmerProdUpload.aggregate([
//                 { $match: { prodcategory: "horticultureproduce" } },
//                 { $group: { _id: "$all", 
//                 totalQuantity: { $sum: "$quantity" },
//                 totalCost: { $sum: { $multiply: [ "$unitprice", "$quantity" ] } },            
//                 }}
//             ])
// 			let totalDairy = await UrbanFarmerProdUpload.aggregate([
//                 { $match: { prodcategory: "dairyproducts" } },
//                 { $group: { _id: "$all", 
//                 totalQuantity: { $sum: "$quantity" },
//                 totalCost: { $sum: { $multiply: [ "$unitprice", "$quantity" ] } },            
//                 }}
//             ])
            
//             console.log("Poultry collections", totalPoultry)
//             console.log("Hort collections", totalHort)
//             console.log("Dairy collections", totalDairy)

//             res.render("reports", { 
//             title: 'Reports', 
//             totalP:totalPoultry[0],
//             totalH:totalHort[0],
//             totalD:totalDairy[0],
//             });
//         } catch (error) {
//             res.status(400).send("unable to find items in the database");
//         }
        
//     }else {
//         res.send("This page is only accessed by Agric Officers")
//     }
// });

// module.exports = router;