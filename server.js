//DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/db");
const passport = require("passport");
const path = require("path");
// const session = require("express-session")

// defining expressSession
const expressSession = require("express-session")({
	secret: "secret",
	resave: false,
	saveUninitialized: false,
});

// importing user model
const Registration = require("./model/User");

// importing route files
const aOregRoutes = require("./routes/aOregRoutes");
const fOregRoutes = require("./routes/fOregRoutes");
const uFregRoutes = require("./routes/uFregRoutes");
const registrationRoutes = require("./routes/registrationRoutes");
const authRoutes = require("./routes/authRoutes");
const dashboardsRoutes = require("./routes/dashboardsRoutes");
const urbanFarmerRoutes = require("./routes/urbanFarmerRoutes ");
// const reportsRoutes = require("./routes/reportsRoutes");

// INSTANTIATIONS
const app = express();

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

// MIDDLEWARE
// const bodyParser = require("body-parser");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/public/uploads", express.static(__dirname + "/public/uploads"));
app.use(expressSession);

// passport configuration middleware
app.use(passport.initialize());
app.use(passport.session());
passport.use(Registration.createStrategy());
passport.serializeUser(Registration.serializeUser());
passport.deserializeUser(Registration.deserializeUser());

// ROUTES
app.use("/", aOregRoutes);
app.use("/", fOregRoutes);
app.use("/", uFregRoutes);
app.use("/", registrationRoutes);
app.use("/", authRoutes);
app.use("/", dashboardsRoutes);
app.use("/", urbanFarmerRoutes);
// app.use("/", reportsRoutes);

//Always the second last line in the Express server
app.get("*", (req, res) => {
	res.send("404! This invalid URL");
});

// BOOTSTRAPPING SERVER ALWAYS THE LAST LINE IN THE EXPRESS SERVER
app.listen(4000, () => console.log("listening on port 4000!"));
