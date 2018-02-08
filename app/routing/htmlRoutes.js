//------- Dependencies ------//
var path = require("path");

//------ Setup & Export html route ------//
module.exports = function(app) {
	//GET for home route
	app.get("/home", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
	//GET for survey route
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});	
	//GET for everything else to direct to home
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});	
}