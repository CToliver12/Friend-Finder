//initialize modal
$(document).ready(function(){
	$(".modal").modal();
});

$("#submit").on("click", function(event){
	event.preventDefault();

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

if(validateForm()){

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


// 	//post new friend data, get match data back and insert into modal
	$.post("/api/friends", userData, function(data){
		$("#matchName").html(data.name);
		$("#matchPhoto").attr("src", data.photo);
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

