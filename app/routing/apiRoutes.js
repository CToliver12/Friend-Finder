//LOAD DATA 
//Linking our routes to a series of "data" sources 
//Data sources hold arrays of information on 
//==============================================================
var userData = require("../data/friends");

//ROUTING
//=============================================================
module.exports = function(app){
	//API GET Requests 
	//Code handles when users "visit" a page 
	//In each of the below cases when a user visits a link 
	//(ex. localhost: PORT/api/admin... user is shown a JSON of the data in the table)

	app.get("/api/friends", function(req,res) {
		res.json(userData);
	});

	var comparisonUserTotalScore = 0;

	var friendScores = [];

	//API Post Requests 
	//Handles when users submits friend form 
	//Compares user to existing users to find friend.
	//Displays friend in pop-up modal.
	//Adds new user to userData array.
	//=================================================================

	app.post("/api/friends", function(req,res) {

		//Store current user scores in array
		var currentUserScores = req.body.scores;

		console.log("Current user scores: " + currentUserScores0);

		//Determine the user's most compatible friend
		for(var i = 0; i < userData.length; i++) {

			//Convert each user's results in to an array of numbers.
			var comparisonUserScores = userData[i].scores;

			//Find total diference between current user and each user 
			comparisonUserTotalScore = calculateUserCompatibilityScore(currentUserScores, comparisonUserScores);

			//Find total difference between current user and each user 
			friendScores.push(comparisonUserTotalScore);
		}

		console.log("Array of friend scores: " + friendScores);

		var index = 0
		var value = friendScores[0];

		//Need to get index of lowest score 
		for (var i = 0; i < friendScores.length; i++) {
			console.log("Value of item in array: " + friendScores[i]);
			if(friendScores[i] < value) {
				value = friendScores[i];
				index = i;
			}
		}

		//Getting a new friend 
		console.log("Best friend name: " + userData[index].name);

		//Send best friend as a response so we can display in modal 
		res.send(userData[index]);

		//Push new user to user array
		userData.push(req.body);
	});
};

var totalDifference = 0;

//Find total difference between current user and another user 
function calculateUserCompatibilityScore(currentUserScores, comparisonUserScores){

	//Reset the total difference counter each time function called 
	totalDifference = 0;

	for(var i = 0; i < currentUserScores.length; i++) {

		totalDifference+=Math.abs(currentUserScores[i] - comparisonUserScores[i]);
	}
	console.log("Final total differnece for a friend: " + totalDifference);

	return totalDifference;
};