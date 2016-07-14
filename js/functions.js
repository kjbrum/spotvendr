$(document).ready(function() {
	var winHeight = $(window).height();
	var winWidth = $(window).width();
	
	$('#projects').html("win height:" + winHeight + "<br/>win width:" + winWidth + "<br/>doc height:" + winHeight + "<br/>doc width:" + winWidth);
	$('body').css("padding-top", (winHeight/2 - ($('#landing img').height() + $('#landing .span6').height())/2) - 100 );


//////////////////////////////////////////////////////////////////////
// Page Scrolling ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
	//Setting a default ease
	$.easing.def = "easeInOutExpo";
	//Set a global scroll variable duration
	var scrollTime = 1500;

	/////////////// Remove active styling when rolling over links ///////////////
	$('.navbar-inverse .nav a').mouseover(function() {
		$('.navbar-inverse .nav a.active').addClass('current');
		$('.navbar-inverse .nav a.active').removeClass('active');
	});
	$('.navbar-inverse .nav a').mouseout(function() {
		$('.navbar-inverse .nav a.current').addClass('active');
		$('.navbar-inverse .nav a.current').removeClass('current');
	});

	/////////////// Changes the active nav link while scrolling ///////////////	
	$('#top-button').hide();
	$(window).scroll(function() {
		// Show scroll-to-top button if needed
		if ($(this).scrollTop() > 200) {
			$('#top-button').fadeIn();
		} else {
			$('#top-button').fadeOut();
		}
		
		// Decide if a link needs to be set to active
		var windowTop = $(window).scrollTop();
		if(windowTop >= 0){
			$('.navbar-inverse .nav .active').removeClass('active');
			$('.navbar-inverse .nav .current').removeClass('current');
			$('a.landing').addClass('active');
		}
		if(windowTop > $('#features').position().top - 300){
			$('.navbar-inverse .nav .active').removeClass('active');
			$('.navbar-inverse .nav .current').removeClass('current');
			$('a.features').addClass('active');
		}
		if(windowTop > $('#about').position().top - 300){
			$('.navbar-inverse .nav .active').removeClass('active');
			$('.navbar-inverse .nav .current').removeClass('current');
			$('a.about').addClass('active');
		}
		if(windowTop > $('#contact').position().top - 300){
			$('.navbar-inverse .nav .active').removeClass('active');
			$('.navbar-inverse .nav .current').removeClass('current');
			$('a.contact').addClass('active');
		}
	});
	
	/////////////// Scroll the page to the location of the clicked link ///////////////	
	$('a.nav-link').click(function() {
		var div = $(this).attr('href');
		$('html, body').animate({scrollTop:$(div).offset().top},{duration:scrollTime});
			return false;
	});
});
