//DEPENDENCIES
const express = require("express");
const app = express();
const path = require("path");

// INSTANTIATIONS
// CONFIGURATIONS
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.set("views", "views");

// MIDDLEWARE
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES
app.get("/", (req, res) => {
	res.render("aOreg");
	// res.render("fOreg");
});

app.get("/register", (req, res) => {
	res.sendFile(__dirname + "/html/aOreg.html");
});

//Always the second last line in the Express server
app.get("*", (req, res) => {
	res.send("404! This invalid URL");
});

// BOOTSTRAPPING SERVER ALWAYS THE LAST LINE IN THE EXPRESS SERVER
app.listen(5000, () => console.log("listening on port 5000!"));
