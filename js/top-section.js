$(document).ready(function () {
//    $("body").css("display", "none");
    $("body").fadeIn(2000);
    var linkLocation;
	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(1000, redirectPage);
	});
	function redirectPage() {
		window.location = linkLocation;
	}
    
    
//    var onExpore = false;
//    initOnLoad();
//    $("#explore").click(function () {
//        workReel();
//        onExpore = true;
//    });
//    var pos = 0;
//    $(window).scroll(function () {
//        pos = $(this).scrollTop();
//    });
//    $('.home-body').bind('mousewheel touchmove', function (e) {
//        var e1 = e.originalEvent;
//        var deltaY = e1.deltaY;
//        if (!onExpore && e1.deltaY > 0) {
//            workReel();
//            onExpore = true;
//        }
//        else if (pos === 0 && deltaY < 0 && onExpore === true) {
//            showReel()
//            onExpore = false;
//        }
//    });
//    if ($('body').attr('id') === 'deutch') {
//        $(".lang-link").find("a").removeClass("active");
//        $(".lang-link:last-child").find("a").addClass("active");
//    }
});

function initOnLoad() {
    renderMarkers();
    renderOffices();
    animation();
}
var firstHeading = 'WE <br>DOCUMENT <br>THE WORLD';
var secondHeading = '1450+ <br>MOVIES';
var thirdHeading = 'IN 50+ <br>COUNTRIES';
var fourthHeading = 'FROM <br>8 OFFICES';
function animation() {
    var interval = 10000;
    if ($('body').attr('id') === 'deutch') {
        firstHeading = '<span style=\'48px\'>WIR <br>DOKUMENTIEREN <br>DIE WELT</span>';
        secondHeading = '1450+ <br>FILME';
        thirdHeading = 'IN 50+ <br>LÄNDERN';
        fourthHeading = 'AUS <br>8 STANDORTEN';
    }
    window.setTimeout(function() { showPins(); $(".overlay-layer-offices").hide().css('bottom', '50px'); $("#main-heading").hide().html(secondHeading).fadeIn(); }, interval);
    window.setTimeout(function() { showCountries(); $(".overlay-layer-pins").hide().css('bottom', '50px'); $("#main-heading").hide().html(thirdHeading).fadeIn(); }, interval*2);
    window.setTimeout(function() { showOffices(); $(".overlay-layer-countries").fadeOut(); $("#main-heading").hide().html(fourthHeading).fadeIn(); }, interval*3);
    window.setTimeout(function() { $(".overlay-layer").hide(); $("#main-heading").hide().html(firstHeading).fadeIn(); animation(); }, interval*4);
}
function renderMarkers() {
    var baseUrl = 'img/pins/pin-';
    for (i = 0; i < 25; i++) {
        var currentId = i + 1;
        var nextId = currentId + 1;
        $("#pin-"+currentId.toString()).clone().attr("id","pin-"+nextId.toString()).attr("src", baseUrl + nextId.toString() + '.png').insertBefore($("#pin-"+currentId));
    }
}
function renderOffices() {
    var baseUrl = 'img/offices/office-';
    for (i = 0; i < 7; i++) {
        var currentId = i + 1;
        var nextId = currentId + 1;
        $("#office-"+currentId.toString()).clone().attr("id","office-"+nextId.toString()).attr("src", baseUrl + nextId.toString() + '.png').insertBefore($("#office-"+currentId));
    }
}
function showPins() {
    for (i = 0; i < 26; i++) {
        var elementId = i + 1;
        $("#pin-" + elementId).delay(50 * i).fadeIn().animate({
            bottom: 0
        }, 50, function () {});
    }
}
function showOffices() {
    for (i = 0; i < 7; i++) {
        var elementId = i + 1;
        $("#office-" + elementId).delay(50 * i).fadeIn().animate({
            bottom: 0
        }, 50, function () {});
    }
}
function showCountries() {
    $(".overlay-layer-countries").fadeIn(1000);
}
function workReel() {
    $("#top-section .left-side, #top-section .right-side").animate({
        bottom: "+=300",
        opacity: 0
    }, 700, function () {});
    $({blurRadius: 3}).animate({blurRadius: 0}, {
        duration: 700,
        easing: 'swing',
        step: function() {
            $('#video-bg .blur').css({
                "-webkit-filter": "blur("+this.blurRadius+"px)",
                "filter": "blur("+this.blurRadius+"px)"
            });
        }
    });
    $("#top-section .darken-layer").animate({
        opacity: 0
    }, 700, function () {});
    window.setTimeout(function() { $("#top-section .left-side, #top-section .right-side").hide();$("#top-section .darken-layer").hide();$("#watch-movies").css('display','flex').fadeIn(); $('.home-body').css('overflow', 'auto')}, 700);
}

function workReelNew() {
    $("#top-section .left-side, #top-section .right-side").animate({
        opacity: 0
    }, 1000, function () {});
    $({blurRadius: 5}).animate({blurRadius: 0}, {
        duration: 1000,
        easing: 'swing',
        step: function() {
            $('#video-bg .blur').css({
                "-webkit-filter": "blur("+this.blurRadius+"px)",
                "filter": "blur("+this.blurRadius+"px)"
            });
        }
    });
    $("#top-section .darken-layer").animate({
        opacity: 0
    }, 700, function () {});
    window.setTimeout(function() { $("#top-section .left-side, #top-section .right-side").hide();$("#top-section .darken-layer").hide();$("#watch-movies").css('display','flex').hide(); $("#top-section").css('position', 'absolute');
        $("#work-section").css('position', 'relative').css('left', '100%').show().animate({
            left: 0
        }, 500, function () {});
        setTimeout(function () {
            $("#top-section").hide().css('position', 'relative')
        }, 500);
        $("#work-all-section").hide();
        $(".work-carousel-control").show()}, 1000);
}


function workReel2() {
    $("#top-section .left-side, #top-section .right-side").animate({
        bottom: "+=300",
        opacity: 0
    }, 1, function () {});
    $({blurRadius: 3}).animate({blurRadius: 0}, {
        duration: 1,
        easing: 'swing',
        step: function() {
            $('#video-bg .blur').css({
                "-webkit-filter": "blur("+this.blurRadius+"px)",
                "filter": "blur("+this.blurRadius+"px)"
            });
        }
    });
    $("#top-section .darken-layer").animate({
        opacity: 0
    }, 1, function () {});
    window.setTimeout(function() { $("#top-section .left-side, #top-section .right-side").hide();$("#top-section .darken-layer").hide();$("#watch-movies").css('display','flex').fadeIn(); $('.home-body').css('overflow', 'auto')}, 1);
}

function showReel() {
    $("#top-section .darken-layer").animate({
        opacity: 1
    }, 700, function () {});
    window.setTimeout(function () {
        $('.home-body').css('overflow', 'hidden');
        $("#watch-movies").css('display', 'none').fadeOut();
        $("#top-section .darken-layer").show();
        $("#top-section .left-side, #top-section .right-side").show();
    }, 700);
    $({
        blurRadius: 0
    }).animate({
        blurRadius: 3
    }, {
        duration: 700
        , easing: 'swing'
        , step: function () {
            $('#video-bg .blur').css({
                "-webkit-filter": "blur(" + this.blurRadius + "px)"
                , "filter": "blur(" + this.blurRadius + "px)"
            });
        }
    });
    $("#top-section .left-side, #top-section .right-side").animate({
        opacity: 1
    , }, 500).animate({
        bottom: "-=300"
    }, 500);
}