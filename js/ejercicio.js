
$(function (){
	
	$('[data-toggle="tooltip"]').tooltip();	
	$('[data-toggle="popover"]').popover();
	$('.fancybox').fancybox({
		helpers : {
			buttons	: {},
			thumbs: {}
		}
	});	
	
});
