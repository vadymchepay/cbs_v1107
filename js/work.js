workVideoArray = [];
slideIndex = 0;
tempNum = 0;
var legalTriger = false;
var workCarouselTrig = false;
var logoTrigger = false;
var allWorksTrigger = false;
var selectedTrig = false;
var vcRemove = false;

function scrollToSection(section) {
    $('html, body').animate({
        scrollTop: section.offset().top
    }, 500);
}

function hideSel() {
    allPlayPause2();
    allWorksTrigger = true;
    logoTrigger = true;
    $("#top-section").hide();
    $("#video-bg").hide();
    $("#work-all-section").show();
    $(".work-carousel-control").show();
    $("#all-play").css('visibility', 'visible');
    $(".navbar-brand .img-responsive").attr('src', 'img/logo_white.png');
    scrollToSection($("#work-section"));
    var volRange = $("#vol-range");
    $("input#vol-range").val(allVolChange * 10);
    if (viewWidth > 767) {
        $("#work-section").hide();
        $('#play-pause-1').css('opacity', '1');
        for (i = 0; i < $("#workCarousel .item video").length; i++) {
            $("#workCarousel .item video").get(i).pause();
        }
    } else {
        $("#work-section").show();
        $(".work-carousel-control").show();
        $("#workCarousel .carousel-caption").hide();
        $(".work-all-content").hide();
        $("#workCarousel").css('height', 'auto');
        $("#mobile-work-open-map").css('visibility', 'hidden');
        $("#mobile-work-hide-map").css('visibility', 'visible');
    }
}

function animatedTitle() {
    var videoName = $("#workCarousel .carousel-inner .item.active .carousel-caption .caption-body div h1.video-name");
    var videoNameSpan = $("#workCarousel .carousel-inner .item.active .carousel-caption .caption-body div h1.video-name span.main-title");
    var scrollW = videoName.get(0).scrollWidth;
    var offsetW = videoName.get(0).offsetWidth;
    if (scrollW > offsetW) {
        var titleText = videoNameSpan.text();
        var spanWidth = videoNameSpan.width();
        var ssMarginLeft = spanWidth / 2;
        var secondSpan = '<span id="shadowSpan" style="margin-left: ' + ssMarginLeft + 'px">' + titleText + '</span>'
        if (!videoName.hasClass('title-animated')) {
            $.when(videoName.append(secondSpan)).then(videoName.addClass('title-animated'))
        }
        var anMarginLeft = spanWidth + ssMarginLeft;

        function animSpan() {
            setInterval(function () {
                videoNameSpan.delay(3000).animate({
                    marginLeft: -anMarginLeft
                }, 5000, function () {
                    videoNameSpan.css({
                        'margin-left': 0
                    })
                })
            }, 500)
        }
        animSpan();
    };
};
$(document).ready(function () {
    //navigation.js
    var onExpore = false;
    initOnLoad();
    $("#explore").click(function () {
        if (viewWidth > 767) {
            workReelNew();
            onExpore = true;
            selectedTrig = true;
        } else {
            workReel();
            onExpore = true;
        }
    });
    $(".darken-layer").click(function () {
        $("#top-section .left-side, #top-section .right-side").animate({
            opacity: 0
        }, 1000, function () {});
        $({
            blurRadius: 5
        }).animate({
            blurRadius: 0
        }, {
            duration: 1000,
            easing: 'swing',
            step: function () {
                $('#video-bg .blur').css({
                    "-webkit-filter": "blur(" + this.blurRadius + "px)",
                    "filter": "blur(" + this.blurRadius + "px)"
                });
            }
        });
        $("#top-section .darken-layer").animate({
            opacity: 0
        }, 1000, function () {});
        window.setTimeout(function () {
            $("#top-section .left-side, #top-section .right-side").hide();
            $("#top-section .darken-layer").hide();
            $("#watch-movies").css('display', 'flex').fadeIn();
        }, 1000);
    });
    $(".right-side").click(function () {
        $("#top-section .left-side, #top-section .right-side").animate({
            opacity: 0
        }, 1000, function () {});
        $({
            blurRadius: 5
        }).animate({
            blurRadius: 0
        }, {
            duration: 1000,
            easing: 'swing',
            step: function () {
                $('#video-bg .blur').css({
                    "-webkit-filter": "blur(" + this.blurRadius + "px)",
                    "filter": "blur(" + this.blurRadius + "px)"
                });
            }
        });
        $("#top-section .darken-layer").animate({
            opacity: 0
        }, 1000, function () {});
        window.setTimeout(function () {
            $("#top-section .left-side, #top-section .right-side").hide();
            $("#top-section .darken-layer").hide();
            $("#watch-movies").css('display', 'flex').fadeIn();
        }, 1000);
    });
    $("#main-heading").click(function () {
        $("#top-section .left-side, #top-section .right-side").animate({
            opacity: 0
        }, 1000, function () {});
        $({
            blurRadius: 5
        }).animate({
            blurRadius: 0
        }, {
            duration: 1000,
            easing: 'swing',
            step: function () {
                $('#video-bg .blur').css({
                    "-webkit-filter": "blur(" + this.blurRadius + "px)",
                    "filter": "blur(" + this.blurRadius + "px)"
                });
            }
        });
        $("#top-section .darken-layer").animate({
            opacity: 0
        }, 1000, function () {});
        window.setTimeout(function () {
            $("#top-section .left-side, #top-section .right-side").hide();
            $("#top-section .darken-layer").hide();
            $("#watch-movies").css('display', 'flex').fadeIn();
        }, 1000);
    });
    var lastY;
    var currentY;
    var pos = 0;
    $(window).scroll(function () {
        pos = $(this).scrollTop();
    });
    $('.home-body').bind('touchstart', function (e) {
        var currentY = e.originalEvent.touches[0].clientY;
        lastY = currentY;
    });
    //    $('.home-body').bind('mousewheel', function (n) {
    //        var n1 = n.originalEvent;
    //        var deltaY = n1.deltaY;
    //        if (!onExpore && deltaY > 0) {
    //            workReel();
    //            onExpore = true;
    //        } else if (pos === 0 && deltaY < 0 && onExpore === true) {
    //            showReel()
    //            onExpore = false;
    //        }
    //
    //    });
    $('.home-body').bind('touchmove', function (e) {
        var currentY = e.originalEvent.touches[0].clientY;
        if (!onExpore && lastY > currentY) {
            workReel();
            onExpore = true;
        } else if (pos === 0 && onExpore === true && lastY < currentY) {
            showReel()
            onExpore = false;
        }
        lastY = currentY;
    });
    if ($('body').attr('id') === 'deutch') {
        $(".lang-link").find("a").removeClass("active");
        $(".lang-link:last-child").find("a").addClass("active");
    }
    $("#open-legal-notice").click(function () {
        allPlayPause2();
        $("#home").toggle();
        $("#legal-notice").toggle();
        if (!legalTriger) {
            legalTriger = true;
        } else {
            legalTriger = false;
        }
    });
    $(".selectedButton").click(function () {
        selectedTrig = true;
        allPlayPause3();
        $("#top-section").hide();
        $("#video-bg").hide();
        $("#work-section").show();
        $("#work-all-section").hide();
        $(".work-carousel-control").show();
        $("#workCarousel .carousel-caption").show();
        $("#workCarousel").css('height', '100vh');
        $("#mobile-work-open-map").css('visibility', 'visible');
        $("#mobile-work-hide-map").css('visibility', 'hidden');
        closeMobileMenu();
        scrollToSection($("#work-section"));
        $("#all-video").get(0).pause();
        if (viewWidth < 767) {
            $("#selectedCarousel").hide();
            $("#workCarousel").show();
            $("#header-mobile .navbar-brand").fadeOut();
            $("#header-mobile .navbar-language-mobile").fadeOut();
        }
        if (allWorksTrigger) {
            allWorksTrigger = false;
        }
        if (logoTrigger) {
            $(".navbar-brand .img-responsive").attr("src", "img/logo.png");
            logoTrigger = false;
        }
        if (workCarouselTrig) {
            $('.video-control-current').hide();
        }
        if (legalTriger) {
            $("#home").toggle();
            $("#legal-notice").toggle();
        }
        animatedTitle()
    });
    $(".allButton").click(function () {
        if (selectedTrig) {
            $.when(selectedPlayPause()).then(hideSel());
        } else {
            hideSel()
        }
    });
    $(window).scroll(function () {
        var sPos = $(this).scrollTop();
        var wsHeight = $("#work-all-section").height();
        if (sPos >= wsHeight && logoTrigger) {
            $(".navbar-brand .img-responsive").attr("src", "img/logo.png");
            logoTrigger = false;
        }
        if (sPos <= wsHeight && !logoTrigger && allWorksTrigger) {
            $(".navbar-brand .img-responsive").attr("src", "img/logo_white.png");
            logoTrigger = true;
        }
    });
    $("#watch-movies").click(function () {
        selectedTrig = true;
        $("#watch-movies").hide();
        $("#top-section").css('position', 'absolute');
        $("#work-section").css('position', 'relative').css('left', '100%').show().animate({
            left: 0
        }, 500, function () {});
        setTimeout(function () {
            $("#top-section").hide().css('position', 'relative')
        }, 500);
        $("#work-all-section").hide();
        $(".work-carousel-control").show();
        if (viewWidth < 767) {
            $("#selectedCarousel").hide();
            $("#workCarousel").show();
            $("#header-mobile .navbar-brand").fadeOut();
            $("#header-mobile .navbar-language-mobile").fadeOut();
        }
        animatedTitle()
    });
    $("#workCarousel").on('slid.bs.carousel', function () {
        animatedTitle()
    });
    var selVidCount = 1;
    $("#selectedCarousel .right.carousel-control").click(function () {
        $("#selectedCarousel").next();
        if (selVidCount >= $("#selectedCarousel .carousel-inner .item").length) {
            selVidCount = $("#selectedCarousel .carousel-inner .item").length
        } else {
            selVidCount++;
        };
    });
    $("#selectedCarousel .left.carousel-control").click(function () {
        if (selVidCount > 1 && selVidCount <= $("#selectedCarousel .carousel-inner .item").length) {
            selVidCount--;
            $("#selectedCarousel").prev();
        } else {
            $("#watch-movies").show();
            $("#work-all-section").hide();
            $(".work-carousel-control").hide();
            setTimeout(function () {
                if (!onExpore) {
                    $("#video-bg").show();
                    workReel2();
                    onExpore = true;
                }
                $("#top-section").css({
                    position: 'relative',
                    'z-index': '1'
                }).show();
            }, 400);
            $("#work-section").animate({
                left: '100%'
            }, 500, function () {
                $("#work-section").css('display', 'none').css('left', '0')
            });
            selVidCount = 1;
        };
    });
    $(".about-nav").click(function () {
        allPlayPause2();
        if (legalTriger) {
            $("#home").toggle();
            $("#legal-notice").toggle();
        }
        scrollToSection($("#about"));
    });
    $(".contact-nav").click(function () {
        allPlayPause2();
        if (legalTriger) {
            $("#home").toggle();
            $("#legal-notice").toggle();
        }
        scrollToSection($("#contact"));
    });
    $(".home-nav").click(function () {
        if (viewWidth > 767) {
            if (selectedTrig) {
                selectedPlayPause()
            }
            allPlayPause2();
            scrollToSection($("#top-section"));
            $("#top-section").show();
            $("#video-bg").show();
            $("#top-section .left-side, #top-section .right-side").css('opacity', '1').show();
            $("#top-section .darken-layer").css('opacity', '1').show();
            $('.blur').css('filter', 'blur(5px)');
            $("#watch-movies").hide();
            $("#work-section").hide();
            $("#work-all-section").hide();
            $(".work-carousel-control").hide();
            if (allWorksTrigger) {
                allWorksTrigger = false;
            }
            if (logoTrigger) {
                $(".navbar-brand .img-responsive").attr("src", "img/logo.png");
                logoTrigger = false;
            }
            if (legalTriger) {
                $("#home").toggle();
                $("#legal-notice").toggle();
            }
        } else {
            if (selectedTrig) {
                workPlayPause()
            }

            scrollToSection($("#top-section"));
            $("#top-section").show();
            $("#video-bg").show();
            $("#top-section .left-side, #top-section .right-side").css({
                'opacity': '1',
                'bottom': '0'
            }).show();
            $("#top-section .darken-layer").css('opacity', '1').show();
            $('.blur').css('filter', 'blur(5px)');
            $("#watch-movies").hide();
            $("#work-section").hide();
            $("#work-all-section").hide();
            $(".work-carousel-control").hide();
        }
    });
    //work.js
    $.getJSON("videos.txt", function (videosjson) {
        var temparray = [];
        $.each(videosjson, function (key, data) {
            var video = {
                project_id: data.projectid,
                post_title_de: data.posttitlede,
                post_title_en: data.posttitleen,
                descr_de: data.descrde,
                descr_en: data.descren,
                country: data.country,
                city_de: data.cityde,
                city_en: data.cityen,
                client: data.client,
                producer_1: data.producer1,
                producer_2: data.producer2,
                producer_3: data.producer3,
                year: data.year,
                cliplength: data.cliplength,
                timestamp: data.timestamp1,
                isSelected: data.isselected
            };
            if (data.enabled === 1) {
                temparray.push(video);
            }
        });
        workVideoArray = shuffle(temparray);
        for (i = 0; i < 3; i++) {
            loadVideo(i, true);
        }
        var selectedItems = 1;
        for (i = 0; i < workVideoArray.length; i++) {
            if (workVideoArray[i].isSelected === 1) {
                var index = i;
                if ($('body').attr('id') === 'deutch') {
                    title = workVideoArray[index].post_title_de;
                    city = workVideoArray[index].city_de;
                    descr = workVideoArray[index].descr_de;
                    clientLabel = 'Klient: ';
                    producerLabel = 'Hersteller: '
                } else {
                    title = workVideoArray[index].post_title_en;
                    city = workVideoArray[index].city_en;
                    descr = workVideoArray[index].descr_en;
                    clientLabel = 'Client: ';
                    producerLabel = 'Producer: ';
                }
                if (city === undefined) {
                    city = ''
                }
                if (descr === undefined) {
                    descr = ''
                }
                if (workVideoArray[index].client === undefined) {
                    workVideoArray[index].client = ''
                }
                if (workVideoArray[index].producer_1 === undefined) {
                    workVideoArray[index].producer_1 = ''
                }
                if (workVideoArray[index].producer_2 === undefined) {
                    workVideoArray[index].producer_2 = ''
                } else {
                    workVideoArray[index].producer_2 = ', ' + workVideoArray[index].producer_2
                }
                if (workVideoArray[index].producer_3 === undefined) {
                    workVideoArray[index].producer_3 = ''
                } else {
                    workVideoArray[index].producer_3 = ', ' + workVideoArray[index].producer_3
                }
                if (workVideoArray[index].year === undefined) {
                    workVideoArray[index].year = ''
                } else {
                    workVideoArray[index].year = workVideoArray[index].year + '|'
                }
                if (workVideoArray[index].country === undefined) {
                    workVideoArray[index].country = ''
                } else {
                    workVideoArray[index].country = workVideoArray[index].country + '|'
                }
                var video = '<div id="selectedVideo' + selectedItems + '" class="item">\n' + '<video id="work-video-' + selectedItems + '" style="min-width: 110%; min-height: 100vh" playsinline>\n' + '<source src="http://vod.comberry.tne-dev.com:8800/raw/' + workVideoArray[index].project_id + '_transcoded_1080.mp4" type="video/mp4">\n' + '<source src="http://vod.comberry.tne-dev.com:8800/raw/' + workVideoArray[index].project_id + '_transcoded_1080.webm" type="video/webm">\n' + '<source src="http://vod.comberry.tne-dev.com:8800/raw/' + workVideoArray[index].project_id + '_transcoded_1080.ogg" type="video/ogg">\n' + '<h1>Something went went wrong... Reload the page please</h1>\n' + '</video>' + '<div class="carousel-caption">' + '<div class="caption-body">' + '<div>' + '<h1 class="video-name"><span>' + title + '</span></h1>' + '<h3 class="video-location">' + city + '</h3>' + '<p class="video-text">' + descr + '</p>' + '<p class="additional-info">' + clientLabel + workVideoArray[index].client + '<br>' + producerLabel + workVideoArray[index].producer_1 + workVideoArray[index].producer_2 + workVideoArray[index].producer_3 + '<br>' + workVideoArray[index].year + workVideoArray[index].country + (workVideoArray[index].cliplength / 60).toFixed(2) + 'min' + '</p>' + '</div>' + '</div>' + '</div>' + '</div>';
                var control = '<button type="button" id="play-pause-selected-' + selectedItems + '" class="play-pause video-control video-control-selected"><img src="img/video/play.png"></button>' + '<input type="range" id="seek-bar-selected-' + selectedItems + '" class="seek-bar video-control video-control-selected" value="0">';
                $("#selectedCarousel").after(control);
                $("#selectedCarousel .carousel-inner").append(video);
                var funcVideo = '$("#selectedCarousel .carousel-inner #selectedVideo' + selectedItems + ' video")';
                var fVid = eval(funcVideo);
                var fVideos = $("#selectedCarousel video");
                var funcPlayBtn = '$("#play-pause-selected-' + selectedItems + '")';
                var fPlayBtn = eval(funcPlayBtn);
                var fMute = $("#mute-video-selected");
                var funcSeekBar = '$("#seek-bar-selected-' + selectedItems + '")';
                var fSeekBar = eval(funcSeekBar);
                addFunctionality(fVid, fVideos, fPlayBtn, fMute, fSeekBar);
                selectedItems++;
            }
        }
        $(".video-control-selected").hide();
        $("#play-pause-selected-1").show();
        $("#mute-video-selected").show();
        $("#seek-bar-selected-1").show();
        $("#selectedCarousel .carousel-inner .item:first-child").addClass("active");
        var firstMarker;
        $("#workCarousel .carousel-inner .item").each(function () {
            if ($(this).attr("id") === workVideoArray[1].project_id) {
                $(this).addClass("active");
                for (i = 0; i < videoMarkersArray.length; i++) {
                    if (videoMarkersArray[i].id === workVideoArray[1].project_id) {
                        firstMarker = videoMarkersArray[i]
                    }
                }
            }
        });
        workinfobox = new InfoBox({
            disableAutoPan: false,
            maxWidth: 275,
            pixelOffset: new google.maps.Size(5, -110),
            zIndex: null,
            boxStyle: {
                background: "transparent", //opacity: 0.75,
                width: "275px"
            },
            closeBoxURL: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(btnClose.replace('{{ color }}', firstMarker.color).replace('{{ color2 }}', firstMarker.color)),
            scaledSize: new google.maps.Size(35, 35),
            closeBoxMargin: "5px -25px -25px 0",
            infoBoxClearance: new google.maps.Size(1, 1),
            isHidden: false,
            pane: "floatPane",
            enableEventPropagandation: false
        });
        openInfoBox(firstMarker);
        var workAllVideoSource = '<source src="http://vod.comberry.tne-dev.com:8800/raw/' + firstMarker.id + '_transcoded_1080.mp4" type="video/mp4">\n' + '<source src="http://vod.comberry.tne-dev.com:8800/raw/' + firstMarker.id + '_transcoded_1080.webm" type="video/webm">\n' + '<source src="http://vod.comberry.tne-dev.com:8800/raw/' + firstMarker.id + '_transcoded_1080.ogg" type="video/ogg">\n' + '<h1>Something went went wrong... Reload the page please</h1>\n';
        $('.work-all-content .video-blockquote .all-video-player .video').html(workAllVideoSource);
        var wcVideo = $("#workCarousel .carousel-inner .item.active video");
        var wcVideos = $("#workCarousel video");
        var wcPlay = $("#play-pause-1");
        var wcVol = $("#mute-video-1");
        var wcSeek = $("#seek-bar-1");
        $('.video-control-2').hide();
        addFunctionality(wcVideo, wcVideos, wcPlay, wcVol, wcSeek);
        $("#workCarousel").on('slid.bs.carousel', function () {
            workCarouselTrig = true;
            var currentItem = $("#workCarousel .carousel-inner .item.active");
            var currentVideo = currentItem.children('video');
            var curVideos = $("#workCarousel video");
            var curVidId = currentItem.attr('id');
            var curControl = '<button type="button" id="play-pause-' + curVidId + '" class="play-pause video-control video-control-' + curVidId + ' video-control-current"><img src="img/video/play.png"></button>' + '<button type="button" id="mute-video-' + curVidId + '" class="mute-video video-control video-control-' + curVidId + ' video-control-current"><img src="img/video/icon_volume_4.png"></button>' + '<input type="range" id="seek-bar-' + curVidId + '" class="seek-bar video-control video-control-' + curVidId + ' video-control-current" value="0">';
            $("#workCarousel").after(curControl);
            var curPlayBtn = '$("#play-pause-' + curVidId + '")';
            var curMuteBtn = '$("#mute-video-' + curVidId + '")';
            var curSeekBar = '$("#seek-bar-' + curVidId + '")';
            var fCurPlayBtn = eval(curPlayBtn);
            var fCurMuteBtn = eval(curMuteBtn);
            var fCurSeekBar = eval(curSeekBar);
            addFunctionality(currentVideo, curVideos, fCurPlayBtn, fCurMuteBtn, fCurSeekBar)
        });
        updateAllWorkVideo($("#workCarousel .item.active"));
        $("#workCarousel #work-video").bind("loadedmetadata", function (e) {
            optimizeWork();
        }, false);

        $(".selected-carousel-control").click(function () {
            for (i = 0; i < $("#selectedCarousel video").length; i++) {
                $("#selectedCarousel video").get(i).pause();
            }
            $("#play-pause-selected").css("opacity", "1");
            if (viewWidth > 767) {
                $('.carousel-caption').fadeIn();
            }
            setTimeout(function () {
                var number = $("#selectedCarousel .item.active").attr('id').replace('selectedVideo', '');
                $(".video-control-selected").hide();
                $("#play-pause-selected-" + number).show().css('opacity', '1');
                $("#mute-video-selected").show();
                $("#seek-bar-selected-" + number).show();
            }, 650);
        });
        $(".work-carousel-control").click(function () {
            if (viewWidth > 767) {
                $("body").css('pointer-events', 'none');
                $("#workCarousel .carousel-inner .item video").each(function () {
                    $(this).get(0).pause();
                    $(this).get(0).currentTime = 0;
                });
                $("#play-pause-1").css("opacity", "1");
                if (viewWidth > 767) {
                    $('.carousel-caption').fadeIn();
                }
                if ($(this).hasClass('right')) {
                    panVideoMarker($("#workCarousel .item:last-child"));
                    var lcId = $("#workCarousel .item.active").attr('id');
                    updateVideo(lcId);
                    changeVideo(lcId);
                    for (i = 0; i < videoMarkersArray.length; i++) {
                        if (videoMarkersArray[i].id === lcId) {
                            openInfoBox(videoMarkersArray[i])
                        }
                    }
                    slideIndex++;
                    renderVideos(slideIndex, true);
                } else {
                    panVideoMarker($("#workCarousel .item:first-child"));
                    var fcId = $("#workCarousel .item.active").attr('id');
                    updateVideo(fcId);
                    changeVideo(fcId);
                    for (i = 0; i < videoMarkersArray.length; i++) {
                        if (videoMarkersArray[i].id === fcId) {
                            openInfoBox(videoMarkersArray[i])
                        }
                    }
                    slideIndex--;
                    renderVideos(slideIndex, false);
                }
                $("#all-video").get(0).pause();
                $("#all-play").css("visibility", "visible");
                $("#all-seek").css("background", "-webkit-gradient(linear, left top, right top, color-stop(0, #8a0f33), color-stop(0, #d7d7d7))");
                $("#all-seek").css("background", "-moz-linear-gradient(left center, #8a0f33 0%, #8a0f33 0, #d7d7d7 0, #d7d7d7 100%)");
                $(".all-play img").attr('src', 'img/video/play_button.png');
                setTimeout(function () {
                    $("body").css('pointer-events', 'auto');
                }, 600);
            } else {
                $('.video-control-1').remove();
                var vcRemove = true;
                $('.video-control-current').remove();
                $("body").css('pointer-events', 'none');
                $("#workCarousel .carousel-inner .item video").each(function () {
                    $(this).get(0).pause();
                    $(this).get(0).currentTime = 0;
                });
                $("#play-pause-1").css("opacity", "1");
                if (viewWidth > 767) {
                    $('.carousel-caption').fadeIn();
                }
                if ($(this).hasClass('right')) {
                    updateAllWorkVideo($("#workCarousel .item:last-child"));
                    panVideoMarker($("#workCarousel .item:last-child"));
                    var lcId = $("#workCarousel .item:last-child").attr('id');
                    for (i = 0; i < videoMarkersArray.length; i++) {
                        if (videoMarkersArray[i].id === lcId) {
                            openInfoBoxMob(videoMarkersArray[i])
                        }
                    }
                    slideIndex++;
                    renderVideos(slideIndex, true);
                } else {
                    updateAllWorkVideo($("#workCarousel .item:first-child"));
                    panVideoMarker($("#workCarousel .item:first-child"));
                    var fcId = $("#workCarousel .item:first-child").attr('id');
                    for (i = 0; i < videoMarkersArray.length; i++) {
                        if (videoMarkersArray[i].id === fcId) {
                            openInfoBoxMob(videoMarkersArray[i])
                        }
                    }
                    slideIndex--;
                    renderVideos(slideIndex, false);
                }
                $("#all-video").get(0).pause();
                $("#all-play").css("visibility", "visible");
                $("#all-seek").css("background", "-webkit-gradient(linear, left top, right top, color-stop(0, #8a0f33), color-stop(0, #d7d7d7))");
                $("#all-seek").css("background", "-moz-linear-gradient(left center, #8a0f33 0%, #8a0f33 0, #d7d7d7 0, #d7d7d7 100%)");
                $(".all-play img").attr('src', 'img/video/play_button.png');
                setTimeout(function () {
                    $("body").css('pointer-events', 'auto');
                }, 600);
            }
        });
    });
});

function panVideoMarker(item) {
    for (i = 0; i < videoMarkersArray.length; i++) {
        if (item.attr('id') === videoMarkersArray[i].id) {
            workmap.setCenter(videoMarkersArray[i].getPosition());
        }
    }
}

function renderVideos(index, right) {
    if (right) {
        $("#workCarousel .carousel-inner .item:first-child").remove();
        loadVideo(index + 2, true);
    } else {
        $("#workCarousel .carousel-inner .item:last-child").remove();
        loadVideo(index, false);
    }
}

function loadVideo(index, right) {
    if (index < -(workVideoArray.length - 1)) {
        slideIndex = 0;
    } else if (index > workVideoArray.length) {
        slideIndex = -1
    }
    if (index < 0) {
        index = workVideoArray.length + index;
    } else if (index > workVideoArray.length - 1) {
        index = index - workVideoArray.length;
    }
    if ($('body').attr('id') === 'deutch') {
        title = workVideoArray[index].post_title_de;
        city = workVideoArray[index].city_de;
        descr = workVideoArray[index].descr_de;
        clientLabel = 'Klient: ';
        producerLabel = 'Hersteller: '
    } else {
        title = workVideoArray[index].post_title_en;
        city = workVideoArray[index].city_en;
        descr = workVideoArray[index].descr_en;
        clientLabel = 'Client: ';
        producerLabel = 'Producer: ';
    }
    if (city === undefined) {
        city = ''
    }
    if (descr === undefined) {
        descr = ''
    }
    if (workVideoArray[index].client === undefined) {
        workVideoArray[index].client = ''
    }
    if (workVideoArray[index].producer_1 === undefined) {
        workVideoArray[index].producer_1 = ''
    }
    if (workVideoArray[index].producer_2 === undefined) {
        workVideoArray[index].producer_2 = ''
    } else {
        workVideoArray[index].producer_2 = ', ' + workVideoArray[index].producer_2
    }
    if (workVideoArray[index].producer_3 === undefined) {
        workVideoArray[index].producer_3 = ''
    } else {
        workVideoArray[index].producer_3 = ', ' + workVideoArray[index].producer_3
    }
    if (workVideoArray[index].year === undefined) {
        workVideoArray[index].year = ''
    } else {
        workVideoArray[index].year = workVideoArray[index].year + '|'
    }
    if (workVideoArray[index].country === undefined) {
        workVideoArray[index].country = ''
    } else {
        workVideoArray[index].country = workVideoArray[index].country + '|'
    }
    var itemTemplate = '<div id="' + workVideoArray[index].project_id + '" class="item">\n' + '<video id="work-video" style="min-width: 110%; min-height: 100vh" playsinline>\n' +
        // '<source src="http://vod.comberry.tne-dev.com:8800/raw/' + workVideoArray[index].project_id + '_transcoded_1080.mp4#t=' + (minutes * 60 + seconds) + '.' + miliseconds + '" type="video/mp4">\n' +
        // '<source src="http://vod.comberry.tne-dev.com:8800/raw/' + workVideoArray[index].project_id + '_transcoded_1080.webm#t=' + (minutes * 60 + seconds) + '.' + miliseconds + '" type="video/webm">\n' +
        // '<source src="http://vod.comberry.tne-dev.com:8800/raw/' + workVideoArray[index].project_id + '_transcoded_1080.ogg#t=' + (minutes * 60 + seconds) + '.' + miliseconds + '" type="video/ogg">\n' +
        '<source src="http://vod.comberry.tne-dev.com:8800/raw/' + workVideoArray[index].project_id + '_transcoded_1080.mp4" type="video/mp4">\n' + '<source src="http://vod.comberry.tne-dev.com:8800/raw/' + workVideoArray[index].project_id + '_transcoded_1080.webm" type="video/webm">\n' + '<source src="http://vod.comberry.tne-dev.com:8800/raw/' + workVideoArray[index].project_id + '_transcoded_1080.ogg" type="video/ogg">\n' + '<h1>Something went went wrong... Reload the page please</h1>\n' + '</video>' + '<div class="carousel-caption">' + '<div class="caption-body">' + '<div>' + '<h1 class="video-name"><span class="main-title">' + title + '</span></h1>' + '<h3 class="video-location">' + city + '</h3>' + '<p class="video-text">' + descr + '</p>' + '<p class="additional-info">' + clientLabel + workVideoArray[index].client + '<br>' + producerLabel + workVideoArray[index].producer_1 + workVideoArray[index].producer_2 + workVideoArray[index].producer_3 + '<br>' + workVideoArray[index].year + workVideoArray[index].country + (workVideoArray[index].cliplength / 60).toFixed(2) + 'min' + '</p>' + '</div>' + '</div>' + '</div>' + '</div>';
    if (right) {
        $("#workCarousel .carousel-inner").append(itemTemplate);
    } else {
        $("#workCarousel .carousel-inner").prepend(itemTemplate);
    }
    // var minutes = parseInt(workVideoArray[index].timestamp.slice(0, 2));
    // var seconds = parseInt(workVideoArray[index].timestamp.slice(3, 5));
    // var miliseconds = parseInt(workVideoArray[index].timestamp.slice(6, 9));
    $("#seek-bar-1").css("background", "-webkit-gradient(linear, left top, right top, color-stop(0, #d3164e), color-stop(0, #d7d7d7))");
    $("#seek-bar-1").css("background", "-moz-linear-gradient(left center, #d3164e 0, #d3164e0, #d7d7d70, #d7d7d7 100%)");
    $("#workCarousel video").bind('timeupdate', function () {
        // Calculate the slider value
        var value = (100 / $(this).get(0).duration) * $(this).get(0).currentTime;
        // Update the slider value
        $("#seek-bar-1").val(value);
        $("#seek-bar-1").css("background", "-webkit-gradient(linear, left top, right top, color-stop(" + value + "%, #d3164e), color-stop(" + value + "%, #d7d7d7))");
        $("#seek-bar-1").css("background", "-moz-linear-gradient(left center, #d3164e 0%, #d3164e" + value + "%, #d7d7d7" + value + "%, #d7d7d7 100%)");
    });
}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function allPlayPause2() {
    if ($("#all-video").get(0).paused == false) {
        $("#all-video").get(0).pause();
        $("#all-play").css("visibility", "visible");
        $(".all-play img").attr('src', 'img/video/play_button.png');
    }
}

function allPlayPause3() {
    if ($("#all-video").get(0).paused == false) {
        $("#all-video").get(0).pause();
        $("#all-video").get(0).load();
        $("#all-play").css("visibility", "visible");
        $(".all-play img").attr('src', 'img/video/play_button.png');
        $("#all-seek").css("background", "-webkit-gradient(linear, left top, right top, color-stop(0, #8a0f33), color-stop(0, #d7d7d7))");
        $("#all-seek").css("background", "-moz-linear-gradient(left center, #8a0f33 0%, #8a0f33 0, #d7d7d7 0, #d7d7d7 100%)");
    }
}

function selectedPlayPause() {
    var activeSlide = $("#selectedCarousel .carousel-inner .item.active video");
    activeSlide.get(0).pause();
    var selInd;
    $("#selectedCarousel .carousel-inner .item").each(function (i, el) {
        if ($(el).hasClass("active")) {
            selInd = i + 1;
            console.log(selInd)
        }
    });
    var strPlayBtn = '$("#play-pause-selected-' + selInd + '")';
    var playBtn = eval(strPlayBtn);
    playBtn.css('opacity', '1');
    if (viewWidth > 767) {
        $('.carousel-caption').fadeIn();
    }
    selectedTrig = false;
}

function workPlayPause() {
    workCarouselTrig = false;
    var activeSlide = $("#workCarousel .carousel-inner .item.active video");
    activeSlide.get(0).pause();
    var selInd;
    if (!vcRemove) {
        $("#play-pause-1").css('opacity', '1');
    } else {

        $("#workCarousel .carousel-inner .item").each(function (i, el) {
            if ($(el).hasClass("active")) {
                selInd = $(el).attr('id');
                console.log(selInd)
            }
        });
        var strPlayBtn = '$(".video-control-' + selInd + '")';
        console.log(strPlayBtn)
        var playBtn = eval(strPlayBtn);
        console.log(playBtn)
        playBtn.each(function (i, el) {
            $(el).css('opacity', '1').show();
            console.log($(el));
        })

    }

    selectedTrig = false;
}
