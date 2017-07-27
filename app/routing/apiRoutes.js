//LOAD DATA 
//Linking our routes to a series of "data" sources 
//Data sources hold arrays of information on 
//==============================================================
var friends = require("../data/friends.js");

//ROUTING
//=============================================================
module.exports = function(app){
	//API GET Requests 
	//Code handles when users "visit" a page 
	//In each of the below cases when a user visits a link 
	//(ex. localhost: PORT/api/admin... user is shown a JSON of the data in the table)

	app.get("/api/friends", function(req,res) {
		res.json(friends);
	});

	//API Post Requests 
	//Handles when users submits form 
	//Compares user to existing users to find style.
	//Displays style in pop-up modal.
	//Adds new user to userData array.
	//=================================================================

	app.post("/api/friends", function(req,res) {
		var newResults = (req.body['scores']).map(Number); 
		var totalDifference = 100;
		var friendIndex; 
		for (var i = 0; i <friends.length; i++){
			var firendResults = friends[i]['scores'];

			var tempDifference = 0;
			for(var j=0; j< newResults.length; j++){
				tempDifference += Math.abs(newResults[j]-firendResults[j]);
			}
			if (tempDifference < totalDifference) {
				totalDifference = tempDifference;
				friendIndex = i; 
			}
		}
		res.json(friends[friendIndex]);
		friends.push(req.body); 
	}); 
}; 