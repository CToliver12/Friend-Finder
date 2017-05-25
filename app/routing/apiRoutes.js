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

		var bestMatch = {
			name: "",
			photo: "",
			friendDifference: 1000
		};

		console.log(req.body);

		//Result of the user's survey POST and parse info 
		var userData = req.body;
		var userScores = userData.scores;

		console.log(userScores);

		//This variable will calculate the difference between the user's scores and the scores of each user in the database 
		var comparisonUserTotalScore = 0;


		//Determine the user's most compatible friend/looping through the database possibilities 
		for(var i = 0; i < friends.length; i++) {

			console.log(friends[i]);
			comparisonUserTotalScore = 0;


		//Next, loop through scores of each friend 
		for(var j = 0; j <friends[i].scores[j]; j++) {

		//Calculate the difference b/w scores and sub them into comparisonUserTotalScore
		comparisonUserTotalScore +=Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

			//if the sum of the difference between the scores and the sum them into the comparisonUserTotalScore
			if (comparisonUserTotalScore += bestMatch.friendDifference) {

				//bestMatch new friend reset
				bestMatch.name = friends[i].name;
				bestMatch.photo = friends[i].photo;
				bestMatch.friendDifference = comparisonUserTotalScore;
			} 
		}
	}
			
			//user's info saved to the database 
			friends.push(userData);

			//return JSON with the user's bestMatch.
			res.json(bestMatch);
		})
	};
