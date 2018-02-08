//------ Dependencies ------//
var friends = require("../data/friends.js");

//------ Export the Main Function ------//
module.exports = function(app) {
	//GET for api/friends route
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});
	//POST for api/friends route
	app.post("/api/friends", function(req, res) {
		//Push answers in to friends array
		friends.push(req.body);
		//Return best match
		res.json(findMatch(friends))
	});
}

//Function to find best match
function findMatch(friends) {
	//Array for total score differences
	var matchScoreArry = [];
	//Take newest scores
	var newScores = friends[friends.length - 1].scores;
	//Loop though friends array and compare scores (excluding newest/current user score)
	for (var i = 0; i < friends.length - 1; i++) {
		//Get scores of friend
		var friendScores = friends[i].scores;
		//Calculate score difference
		for (var j = 0; j < friendScores.length; j++) {
			var userScore = parseInt(newScores[j]);
			var matchScore = parseInt(friendScores[j]);
			var difference = Math.abs(userScore - matchScore);
			totalDiff = difference;
		}
		matchScoreArry[i] = totalDiff;
	}
	//Find lowest value in matchScoreArray
	var lowVal = Math.min(matchScoreArray);
	//Get index of friend associated with the lowVal
	var closeMatch = matchScoreArray.indexOf(lowVal);
	//Return results
	return {
		"name": friends[closeMatch].name,
		"photo": friends[closeMatch].photo
	};
}