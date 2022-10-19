//DEPENDENCIES
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./config/db");
const passport = require("passport");
const path = require("path");

// defining expressSession
const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,  
});

// importing user model
const Officer = require("./model/User");

// importing route files
const aOregRoutes = require("./routes/aOregRoutes");
const registrationRoutes = require("./routes/registrationRoutes");
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
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/public/css", express.static(__dirname + "/public/css"));
app.use(expressSession);

// passport configuration middleware 
app.use(passport.initialize());
app.use(passport.session());
passport.use(Officer.createStrategy());
passport.serializeUser(Officer.serializeUser());
passport.deserializeUser(Officer.deserializeUser);


// ROUTES
app.use("/", aOregRoutes);
app.use("/", registrationRoutes);

//Always the second last line in the Express server
app.get("*", (req, res) => {
	res.send("404! This invalid URL");
});

// BOOTSTRAPPING SERVER ALWAYS THE LAST LINE IN THE EXPRESS SERVER
app.listen(5000, () => console.log("listening on port 5000!"));
