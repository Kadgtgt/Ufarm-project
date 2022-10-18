//DEPENDENCIES
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./config/db");
const passport = require("passport");
const path = require("path");

// importing route files
const aOregRoutes = require("./routes/aOregRoutes");
// INSTANTIATIONS

//setup database connections
mongoose.connect(config.database, { useNewUrlParser: true });
const db = mongoose.connection;

// Check db connection
db.once("open", function () {
	console.log("Connected to MongoDB");
});

// Check for db errors
db.on("error", function (err) {
	console.error(err);
});

// CONFIGURATIONS
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.set("views", "views");

// MIDDLEWARE
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES
app.use("/", aOregRoutes);

//Always the second last line in the Express server
app.get("*", (req, res) => {
	res.send("404! This invalid URL");
});

// BOOTSTRAPPING SERVER ALWAYS THE LAST LINE IN THE EXPRESS SERVER
app.listen(5000, () => console.log("listening on port 5000!"));
