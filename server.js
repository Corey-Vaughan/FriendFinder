//------ Dependencies ------//
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//------ Express Setup ------//
const app = express();
const PORT = process.env.PORT || 3000;

//------ Data Parsing ------//
app.use(bodyParser.urlencoded({ extended: true }));

//------ Routes ------//
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

//------ Start Server ------//
app.listen(PORT, function() {
	console.log("App is listening on port: " + PORT);
});