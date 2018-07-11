$(document).ready(function () {
    $(".content").click(function () {
        if (menuOpened && $(this).hasClass('opened-menu')) {
            closeMobileMenu();
        }
    });
    $(".navbar-toggle").click(function () {
        if (menuOpened) {
            closeMobileMenu();
        } else {
            $(".navbar-language-mobile").hide();
            $("#header-mobile .navbar-toggle").html('<span class="sr-only">Toggle navigation</span>\n' +
                '<span class="glyphicon glyphicon-remove"></span>');
            $(".navbar-toggle .glyphicon").css('color', '#fff').css('font-size', '25px');
            $("#navbar-mobile").show().animate({
                left: 0
            }, 100, function () {});
            setTimeout(function () {$(".content").addClass("opened-menu")}, 1);
            menuOpened = true;
        }
    });
    $(".mobile-nav-link").click(function () {
       closeMobileMenu();
    });

});