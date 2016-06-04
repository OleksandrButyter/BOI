$("#dropdown-content a:nth-child(1)").click(function() {
  $("html, body").animate({ scrollTop: $('#home').offset().top - 150}, 500);
  return false;
});

$("#dropdown-content a:nth-child(2)").click(function() {
  $("html, body").animate({ scrollTop: $('#about').offset().top - 150}, 500);
  return false;
});

$("#dropdown-content a:nth-child(3)").click(function() {
  $("html, body").animate({ scrollTop: $('#education').offset().top - 150}, 500);
  return false;
});

$("#dropdown-content a:nth-child(4)").click(function() {
  $("html, body").animate({ scrollTop: $('#family').offset().top - 150}, 500);
  return false;
});

$("#dropdown-content a:nth-child(5)").click(function() {
  $("html, body").animate({ scrollTop: $('#contact').offset().top - 150}, 500);
  return false;
});

$("#bar li:nth-child(3)").click(function() {
  $("html, body").animate({ scrollTop: $('#home').offset().top - 150}, 500);
  return false;
});

$("#bar li:nth-child(4)").click(function() {
  $("html, body").animate({ scrollTop: $('#about').offset().top - 150}, 500);
  return false;
});

$("#bar li:nth-child(5)").click(function() {
  $("html, body").animate({ scrollTop: $('#education').offset().top - 150}, 500);
  return false;
});

$("#bar li:nth-child(6)").click(function() {
  $("html, body").animate({ scrollTop: $('#family').offset().top - 150}, 500);
  return false;
});

$("#bar li:nth-child(7)").click(function() {
  $("html, body").animate({ scrollTop: $('#contact').offset().top - 150}, 500);
  return false;
});


$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},500);
		return false;
	});
	
});