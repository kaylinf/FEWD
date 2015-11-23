$(document).ready(function(){

	function showCafeLulu() {
		$('.mke').slideUp();
		event.preventDefault();		
	}

	$('.mke').click(showCafeLulu);

	function showBreweryTour() {
		$('.cafeLulu').slideUp();
		event.preventDefault();		
	}

	$('.cafeLulu').click(showBreweryTour);

	function showPackingHouse() {
		$('.breweryTour').slideUp();
		event.preventDefault();		
	}

	$('.breweryTour').click(showPackingHouse);

	function showCafeBeneulx() {
		$('.packingHouse').slideUp();
		event.preventDefault();		
	}

	$('.packingHouse').click(showCafeBeneulx);

	function showThirdWard() {
		$('.cafeBenelux').slideUp();
		event.preventDefault();		
	}

	$('.cafeBenelux').click(showThirdWard);

	function showLunch() {
		$('.thirdWard').slideUp();
		event.preventDefault();		
	}

	$('.thirdWard').click(showLunch);

	function showSomeActivity() {
		$('.lunch').slideUp();
		event.preventDefault();		
	}

	$('.lunch').click(showSomeActivity);

	function showBelAir() {
		$('.someActivity').slideUp();
		event.preventDefault();		
	}

	$('.someActivity').click(showBelAir);

	function showHome() {
		$('.belAir').show('.mke');
		event.preventDefault();		
	}

	$('.belAir').click(showHome);

});	