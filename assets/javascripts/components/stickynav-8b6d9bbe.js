$(window).scroll(function(){$(window).scrollTop()>100?$(".site-header").addClass("sticky"):$(".site-header").removeClass("sticky")}),$(".mobile-menu").click(function(){$(".site-header").hasClass("menu-active")?$(".site-header").removeClass("menu-active"):$(".site-header").addClass("menu-active")}),$(".site-header li a").click(function(){$(".site-header").hasClass("menu-active")&&($(".navigation").removeClass("menu-active"),$(".site-header").removeClass("menu-active"))}),$("nav a").click(function(e){var i=$(this).attr("href"),t=70,s=$(i).offset().top-t;$("html, body").animate({scrollTop:s},500),e.preventDefault()}),$(window).on("load",function(){function e(){$(".fade").each(function(){var e=$(this).offset().top+$(this).outerHeight(),i=$(window).scrollTop()+$(window).innerHeight();i>e?0==$(this).css("opacity")&&$(this).fadeTo(900,1):1==$(this).css("opacity")&&$(this).fadeTo(300,6)})}e(),$(window).scroll(function(){e()})});