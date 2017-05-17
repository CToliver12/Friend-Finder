//Dependencies
//=======================================================================

var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');

//Sets up Express App
//=======================================================================
var app = express();// Tells node that we are creating an "express" server  
var PORT = process.env.PORT || 8080; //sets initial port/used in listener 

//Sets up Express app to handle data parsing 
//=========================================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

//Router
//below points ever to a series of "route" files 
//routes give the server a "map" of how to respond when users visit or request data from URLs
//=========================================================================
require("./app/routing/apiRoutes.js")(app);//include first because that is the data displaying in html pages =
require("./app/routing/htmlRoutes.js")(app);

//Listener- effectively "starts" server
//========================================================================
app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);

});