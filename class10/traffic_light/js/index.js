//Implement the red light using jQuery. Don't forget to add the script tags.
$(document).ready(function() {

	function clearLights() {
		$('.bulb').css('background-Color', 'black');
	}

	function illuminateStopLightRed() {
		clearLights();
		$('#stopLight').css('background-Color', 'red');
	}	

	function illuminateStopLightYellow() {
		clearLights();
		$('#slowLight').css('background-Color', 'yellow');
	}

	function illuminateStopLightGreen() {
		clearLights();
		$('#goLight').css('background-Color', 'green');
	}

	// Code goes here!
	$('#stopButton').click(illuminateStopLightRed);
	$('#slowButton').click(illuminateStopLightYellow);
	$('#goButton').click(illuminateStopLightGreen);


});