
$(document).ready(function() {
	$(".slideshow-content").cycle({
		fx:     'uncover', 
    	speed:  'fast', 
		next: ".navigation .right",
		prev: ".navigation .left",
		pager: ".pagination"
	});
});