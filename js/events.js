//define functions here
function getIt() {
	$("p").on("click", function() {
		alert("clicked");
	});
}

function frameIt() {
	$("img").load(ev => {
		ev.target.className = "tasty";
	});
}

function pressIt() {
	$("#typing").on("keydown", function(key) {
		if (key.which == 71) {
			alert("g was pressed");
		}
	});
}

function submitIt() {
	$("form").submit(function(ev) {
		alert("Your form is going to be submitted now.");
	});
}

$(document).ready(function() {
	// call functions here
	pressIt();
	getIt();
	frameIt();
	submitIt();
});
