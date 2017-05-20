//included  path package to get the correct file path for html 
var path = require('path'); 

//==================================================================
//ROUTING 
module.exports = function(app){
	//HTML GET requests
	//handles when users "visit" a page
	//**A GET Route to /survey which should display the survey page. 

	app.get("/survey", function(req,res){
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});

	//A default USE route that leads to home.html which displays the home page
	app.use("/", function(req,res){
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});
};