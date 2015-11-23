
$(document).ready(function(){



/*
$('#grayButton').click(switchGray);
$('#whiteButton').click(switchWhite);
$('#blueButton').click(switchBlue);
$('#yellowButton').click(switchYellow);

function switchGray() {
  $('body').attr('class', 'gray');
}

function switchWhite() {
  $('body').attr('class', 'white');
}

function switchBlue() {
  $('body').attr('class', 'blue');
}

function switchYellow() {
  $('body').attr('class', 'yellow');
}



/*Breaking down above code into four lines*/


	$('li').click(function() {
		var buttonClassName = $(this).attr('class');
		$('body').attr('class', buttonClassName);
	});

});	
