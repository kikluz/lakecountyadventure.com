// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.site-header').addClass('sticky');
    } else {
        $('.site-header').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-menu').click(function() {
    if ($('.site-header').hasClass('menu-active')) {
        $('.site-header').removeClass('menu-active');
    } else {
        $('.site-header').addClass('menu-active');
    }
});

$('.site-header li a').click(function() {
    if ($('.site-header').hasClass('menu-active')) {
        $('.navigation').removeClass('menu-active');
        $('.site-header').removeClass('menu-active');
    }
});

// Navigation Scroll - ljepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

// Fade In Pannels   http://stackoverflow.com/questions/26694385/fade-in-on-scroll-down-fade-out-on-scroll-up-based-on-element-position-in-win
$(window).on("load",function() {
  function fade() {
    $('.fade').each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      var windowBottom = $(window).scrollTop() + $(window).innerHeight();

      /* If the object is completely visible in the window, fade it in */
      if (objectBottom < windowBottom) {
        if ($(this).css('opacity')==0) {$(this).fadeTo(500,7);}
      } else {
        if ($(this).css('opacity')==1) {$(this).fadeTo(500,8);}
      }
    });
  }
  fade(); //Fade in completely visible elements during page-load
  $(window).scroll(function() {fade();}); //Fade in elements during scroll
});