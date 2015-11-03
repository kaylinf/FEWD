$(document).ready(function(){
	//Setting up a variable to store whether the ights are on or off
	var lights = 'on';

	//Listener waiting for user to click light switch button
	$('#light_switch').click(switchLights);

	function switchLights(){
		//Test to see if the lights are on 
		if(lights === 'on'){
			//If yes, change background color to black
			$('body').css('background', 'black');

			//Update the current state to the lights are off
			lights = 'off';

		//Test to see if the lights are off	
		}else if (lights === 'off'){

			//If they are, change the background to white
			$('body').css('background', 'white');

			//	
			lights = 'on';
		}
	}
});