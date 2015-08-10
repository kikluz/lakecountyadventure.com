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