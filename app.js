$(document).ready(function() {
	var backendSelection = "";
	var learningStyleSelection = "";
	var recommendation = "";
	$('#backendButtonGroup button').click(function() {
		backendSelection = $(this).attr('id');
		console.log(backendSelection);
	});

	$('#learningStyleButtonGroup button').click(function() {
		learningStyleSelection = $(this).attr('id');
	});

	var conclusionGenerator = function() {
		if (backendSelection === "javascript") {
			if (learningStyleSelection === "independent") {
				recommendation = "Rapid Prototyping with JS";
			} else {
				recommendation = "Hack Reactor";
			}
		} else if (backendSelection === "python") {
			recommendation = "Learn Python the Hard Way"
		} else {
			if (learningStyleSelection === "independent") {
				recommendation = "RailsTutorial.org";
			} else {
				recommendation = "Dev Bootcamp";
			}
		}
		$('#recommendation').html(recommendation);
	};

	$('#conclusion').click(function() {
		conclusionGenerator();
	});

});