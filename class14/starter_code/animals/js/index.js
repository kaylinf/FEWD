$(document).ready(function(){

	//Variables
	var animals = ['animal1.jpg', 'animal2.jpg', 'animal3.jpg', 'animal4.jpg', 'animal5.jpg', 'animal6.jpg', 'animal7.jpg'];

	var i = 0;

	var lastIndexOfTheArray = animals.length - 1;

	//Events
	$('#next').click(goToNextAnimal);
	$('#back').click(goToPreviousAnimal);

	//Define fucntions (reactions to events)
	function goToNextAnimal() {

		if (i === lastIndexOfTheArray) {
			i = 0;
		} else {
			//i = i + 1;
			i++;
		}
		
			var nextAnimal = animals[i];

			$('#image-to-vote-on').attr('src', 'images/' + nextAnimal);
	}

	function goToPreviousAnimal(){

		if (i === 0) {
			i = lastIndexOfTheArray
		} else {
			i---;
		}
		

		var previousAnimal = animals[i];

		$('#image-to-vote-on').attr('src', 'images/' + previousAnimal);


	}

});