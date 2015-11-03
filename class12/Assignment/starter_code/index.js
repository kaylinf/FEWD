$(document).ready(function(){
	//Setting up variable to store city background image
	//var city = 'none';

	//Listen for user to submit city 
	$('#entry').submit(newCity);

	function newCity(){
	//Get the string value of input field city-type
	event.preventDefault();
	var city = $('#city-type').val();

		//Test input New York	
		if(city === 'New York'){
			//Change background to NYC image
			$('body').css('background', 'url(images/nyc.jpg)'); 

		//Test input Austin
		}else if (city === 'Austin'){
			//Change background to Austin image
			$('body').css('background', 'url(images/austin.jpg)'); 	

		//Test LA input
		}else if (city === 'Los Angeles'){
			//Change background to LA image
			$('body').css('background', 'url(images/la.jpg)'); 

		//Test SF image	
		}else if (city === 'San Francisco'){
			//Change background to SF image
			$('body').css('background', 'url(images/sf.jpg)'); 

		//Test Sydney image	
		}else if (city === 'Sydney'){
			//Change background to Sydney image
			$('body').css('background', 'url(images/sydney.jpg)'); 
		}

	}

});
