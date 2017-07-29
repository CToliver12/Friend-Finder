//initialize modal
$(document).ready(function(){
	$(".modal").modal();
});

//Capture the form inputs/click
$("#submit").on("click", function(event){
	event.preventDefault();


//Form validation 
function validateForm() {
	var isValid = true;
$(".form-control").each(function(){
	if($(this). val() === "") {
		isValid = false;
	}
});

$(".browser-default").each(function() {
	if( $(this).val() === ""){
		isValid = false
	}
})
return isValid;
}

//If all required fields are filled 
if(validateForm()){

//Create an object for the user's data 
	var userData = {
		name: $("#name").val().trim(),
		photo: $("#photo").val().trim(),
		scores: [
			$("#question1").val(), 
			$("#question2").val(), 
			$("#question3").val(), 
			$("#question4").val(), 
			$("#question5").val(), 
			$("#question6").val(), 
			$("#question7").val(), 
			$("#question8").val(), 
			$("#question9").val(), 
			$("#question10").val()
		]
	};

	//Grab the URL from the website 
	var currentURL = window.location.orgin; 


 	//AJAX post the data, get match data back and insert into modal
	$.post("/api/friends", userData, function(data){
		//Most compatible name 
		$("#matchName").html(data.name);
		//most compatible photo
		$("#matchPhoto").attr("src", data.photo);
		//best match 
		$("#modalResult").modal("open");


	//clear form 
	$("#name").val("");
	$("#photo").val("");
	$("#question1").val(""), 
	$("#question2").val(""), 
	$("#question3").val(""), 
	$("#question4").val(""), 
	$("#question5").val(""), 
	$("#question6").val(""), 
	$("#question7").val(""), 
	$("#question8").val(""), 
	$("#question9").val(""), 
	$("#question10").val("")

}); 

}
else{
	alert("Please fill out all fields before submitting!"); 
}
return false; 
});

