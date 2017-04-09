$(document).ready(function() {
	var background=$('#menus');
	var link=window.location.pathname;
	var link_about=$('#about-me');

	$('.menu-table').css({
		'display': 'flex'
	});
	background.hide();
	$(window).on('load', function () {
	    $preloader = $('.loaderArea'),
	      $loader = $preloader.find('.loader');
	    $loader.fadeOut();
	    $preloader.delay(250).fadeOut('slow');
	  });
	
	/*if(link=='/jobs.html'){
		link_about.attr("href", "../index.html#about");
	}*/

});
