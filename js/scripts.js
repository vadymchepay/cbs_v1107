var viewWidth = window.innerWidth;
var menuOpened = false;
var videovolumevar = 1;
var allVolChange;
$(document).ready(function () {
    //    $("#contactCarousel .carousel-inner").swipe({
    //        swipeRight: function (event, direction, distance, duration, fingerCount) {
    //            $(this).parent().carousel('prev');
    //            checkLocation(0);
    //        },
    //        swipeLeft: function () {
    //            $(this).parent().carousel('next');
    //            checkLocation(2);
    //        },
    //        threshold: 0
    //    });
    var videopaused = false;
    if (viewWidth < 768) {
        workmap.setZoom(1);
    }
    $(".carousel").on("touchstart", function (event) {
        var xClick = event.originalEvent.touches[0].pageX;
        $(this).one("touchmove", function (event) {
            var xMove = event.originalEvent.touches[0].pageX;
            if (Math.floor(xClick - xMove) > 5) {
                $(this).carousel('next');
                checkLocation(2);
            }
            else if (Math.floor(xClick - xMove) < -5) {
                $(this).carousel('prev');
                checkLocation(0);
            }
        });
        $(".carousel").on("touchend", function () {
            $(this).off("touchmove");
        });
    });
    $("#work-all-section").hide();
    $("#work-all-section").hide();
    $(".work-carousel-control").hide();
    $("#play-pause-1").css('visibility', 'visible');
    $("#mute-video-1").css('visibility', 'visible');
    $("#seek-bar-1").css('visibility', 'visible');
    $("#all-video").click(function () {
        $("#all-video").get(0).pause();
        $("#all-play").css('visibility', 'visible');
    });
    $("#all-play").click(function () {
        allPlayPause();
    });
    $(".all-play").click(function () {
        allPlayPause();
    });
    var volRangeTrigger = false;
    $(".all-volume").click(function () {
        if (!volRangeTrigger) {
            volRangeTrigger = true;
            $("#vol-range").show();
        }
        else {
            volRangeTrigger = false;
            $("#vol-range").hide();
        }
    });
    $(".all-volume").dblclick(function () {
        if ($("#all-video").get(0).volume != 0) {
            $("#all-video").get(0).volume = 0;
            $(".all-volume img").attr("src", "img/video/icon_volume_red_0.png");
        }
        else {
            $("#all-video").get(0).volume = 1;
            $(".all-volume img").attr("src", "img/video/icon_volume_red_4.png");
        }
    });
    $("#vol-range").on('change', function () {
        allVolChange = $("#vol-range").get(0).value / 100;
        $("#all-video").get(0).volume = allVolChange;
        if ($("#all-video").get(0).volume == 0) {
            $(".all-volume img").attr("src", "img/video/icon_volume_red_0.png");
        }
        else if ($("#all-video").get(0).volume > 0 && $("#all-video").get(0).volume <= 0.25) {
            $(".all-volume img").attr("src", "img/video/icon_volume_red_1.png");
        }
        else if ($("#all-video").get(0).volume > 0.25 && $("#all-video").get(0).volume <= 0.5) {
            $(".all-volume img").attr("src", "img/video/icon_volume_red_2.png");
        }
        else if ($("#all-video").get(0).volume > 0.5 && $("#all-video").get(0).volume <= 0.75) {
            $(".all-volume img").attr("src", "img/video/icon_volume_red_3.png");
        }
        else {
            $(".all-volume img").attr("src", "img/video/icon_volume_red_4.png");
        }
    });
    $("#vol-range").on('mouseup', function () {
        if (volRangeTrigger) {
            $("#vol-range").hide();
            volRangeTrigger = false;
        }
    });
    var mozFScr = false;
    var fullScreenButton = document.getElementById("all-fullscreen");
    fullScreenButton.addEventListener("click", function () {
        var video = document.getElementById("all-video");
        if (video.requestFullscreen) {
            video.requestFullscreen();
        }
        else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen(); // Firefox
            video.controls = true;
            mozFScr = true;
            console.log('mozFScr = ' + mozFScr);
        }
        else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen(); // Chrome and Safari
        }
    });
    
    $(document).bind('mozfullscreenchange', function(){
        console.log('change');
    })
    
    
//    var videoElement = document.getElementById("all-video");
//
//    function toggleFullScreen() {
//        if (document.mozCancelFullScreen) {
//            $.when(document.mozCancelFullScreen()).then(hideControls())
//
//            function hideControls() {
//                videoElement.controls = false;
//                mozFScr = false;
//                console.log('mozFScr = ' + mozFScr);
//                console.log(videoElement);
//            }
//        }
//        else {
//            document.webkitCancelFullScreen();
//        }
//    }
//    document.addEventListener("keydown", function (e) {
//        if (e.keyCode == 27 && mozFScr) {
////            videoElement.removeAttribute('controls');
////            mozFScr = false;
////            console.log('mozFScr = ' + mozFScr);
////            console.log(videoElement);
//            toggleFullScreen()
//        }
//    }, false);
    
    
    $("#all-seek").bind('change', function () {
        // Calculate the new time
        var time = $("#all-video").get(0).duration * ($("#all-seek").val() / 100);
        // Update the video time
        $("#all-video").get(0).currentTime = time;
    });
    $("#all-video").bind('timeupdate', function () {
        // Calculate the slider value
        var value = (100 / $("#all-video").get(0).duration) * $("#all-video").get(0).currentTime;
        // Update the slider value
        $("#all-seek").val(value);
        $("#all-seek").css("background", "-webkit-gradient(linear, left top, right top, color-stop(" + value + "%, #8a0f33), color-stop(" + value + "%, #d7d7d7))");
        $("#all-seek").css("background", "-moz-linear-gradient(left center, #8a0f33 0%, #8a0f33" + value + "%, #d7d7d7" + value + "%, #d7d7d7 100%)");
    });
    $("#all-seek").bind('mouseup', function () {
        $("#all-video").get(0).play();
        $("#all-play").css('visibility', 'hidden');
    });
    // $(".work-carousel-control").click(function () {
    // createElementDataArray($("#workCarousel .item .video-name"), videoNamesArray);
    // createElementDataArray($("#workCarousel .item .video-location"), videoLocationsArray);
    // createElementDataArray($("#workCarousel .item .video-text"), videoInfoArray);
    // createElementDataArray($("#workCarousel .item .additional-info"), videoAddInfo);
    //
    // $("#workCarousel .item video source").each(function() {
    //     var temp = $( this ).attr('src');
    //     temp = temp.toString();
    //     videoMetaDataArray.push(temp);
    // });
    //
    // if (viewWidth > 767) {
    //     $(".carousel-caption").show();
    // }
    // for (i = 0; i<$("#workCarousel .item video").length; i++) {
    //     $("#workCarousel .item video").get(i).pause();
    // }
    // var element;
    // var activeItem;
    // var direction;
    // if($(this).hasClass('right')) {
    //     activeItem = $("#workCarousel .item.active").next();
    //     element = $("#workCarousel .item.active").next().find('video');
    //     direction = true;
    // } else {
    //     activeItem = $("#workCarousel .item.active").prev();
    //     element = $("#workCarousel .item.active").prev().find('video');
    //     direction = false;
    // }
    // $(".video-control").css('visibility', 'hidden');
    // var array = $('#workCarousel .item');
    // for(i=0; i<array.length; i++) {
    //     var index = i+1;
    //     if ('video-'+index === element.attr('id')) {
    //         $('.video-control').css('visibility', 'hidden');
    //         $('.video-control-' + index).css('visibility', 'visible');
    //         $("#all-video").find('source').attr('src', element.find('source').attr('src'));
    //         document.getElementById("all-video").load();
    //         $("#work-all-section .video-name").html(activeItem.find(".video-name").html());
    //         $("#work-all-section .video-location").html(activeItem.find(".video-location").html());
    //         $("#work-all-section .video-text").html(activeItem.find(".video-text").html());
    //         $("#work-all-section .additional-info").html(activeItem.find(".additional-info").html());
    //     } else if (direction && $("#workCarousel .item.active").find('video').attr('id') === 'video-'+array.length) {
    //         $('.video-control').css('visibility', 'hidden');
    //         $('.video-control-1').css('visibility', 'visible');
    //         $("#all-video").find('source').attr('src', videoMetaDataArray[0]);
    //         document.getElementById("all-video").load();
    //         updateAllWorkVideo(0)
    //     } else if (!direction && $("#workCarousel .item.active").find('video').attr('id') === 'video-1') {
    //         $('.video-control').css('visibility', 'hidden');
    //         $('.video-control-'+array.length).css('visibility', 'visible');
    //         $("#all-video").find('source').attr('src', videoMetaDataArray[videoMetaDataArray.length-1]);
    //         document.getElementById("all-video").load();
    //         updateAllWorkVideo(videoMetaDataArray.length-1);
    //     }
    // }
    // for (i = 0; i < videoMarkersArray.length; i++) {
    //     console.log($('#workCarousel .item.active'));
    //     if (videoMarkersArray[i].id === $('#workCarousel .active').attr('id')) {
    //         if (direction) {
    //             if (i + 2 > videoMarkersArray.length) {
    //                 workmap.panTo(videoMarkersArray[0].getPosition());
    //                 console.log(videoMarkersArray[0]);
    //             } else {
    //                 workmap.panTo(videoMarkersArray[i+1].getPosition());
    //                 console.log(videoMarkersArray[i+1]);
    //             }
    //         } else {
    //             if (i - 1 < 0) {
    //                 workmap.panTo(videoMarkersArray[videoMarkersArray.length-1].getPosition());
    //                 console.log(videoMarkersArray[videoMarkersArray.length-1])
    //             } else {
    //                 workmap.panTo(videoMarkersArray[i-1].getPosition());
    //                 console.log(videoMarkersArray[videoMarkersArray.length-1])
    //             }
    //         }
    //         console.log(videoMarkersArray[i].id)
    //     }
    // }
    // });
    $("#selectedCarousel").carousel({
        wrap: false
    });
    $(window).bind('scroll', function (e) {
        if ($(window).scrollTop() > 0) {
            $("#header-mobile .navbar-brand").fadeOut();
            $("#header-mobile .navbar-language-mobile").fadeOut();
        }
        else {
            $("#header-mobile .navbar-brand").fadeIn();
            $("#header-mobile .navbar-language-mobile").fadeIn();
        }
        //        if ($("#workCarousel").css('display') === 'block' && $(window).scrollTop() === 0) {
        //            $("#header-mobile .navbar-brand").fadeOut();
        //            $("#header-mobile .navbar-language-mobile").fadeOut();
        //        } else if ($("#workCarousel").css('display') === 'none' && $(window).scrollTop() === 0) {
        //            $("#header-mobile .navbar-brand").fadeIn();
        //            $("#header-mobile .navbar-language-mobile").fadeIn();
        //        }
        var viewport = $(window).height();
        var current = $(window).scrollTop() / (viewport / 100);
        var volume = 1 - (1 / 100 * current * 2);
        var volume2 = 1 - (1 / 100 * current) * 1.5;
        if (volume2 <= 0) {
            volume2 = 0;
        }
        if ($("#work-all-section").css('display') === 'block') {
            $("#all-video").get(0).volume = volume2;
            if ($("#all-video").get(0).volume === 0) {
                $("#all-video").get(0).pause();
                $("#all-play").css('visibility', 'visible');
            }
        }
        if ($("#workCarousel").css('display') === 'block') {
            for (i = 0; i < $("#workCarousel video").length; i++) {
                if (0.25 > volume && 0 < volume) {
                    $("#workCarousel video").get(i).volume = 1 - (1 / 100 * current);
                    if ($("#workCarousel video").get(i).muted === true) {
                        $(".mute-video img").attr("src", "img/video/icon_volume_0.png");
                    }
                    else {
                        $(".mute-video img").attr("src", "img/video/icon_volume_1.png");
                    }
                    if (videopaused) {
                        $("#workCarousel .item.active video").get(i).play();
                        videopaused = false;
                    }
                }
                else if (1 < volume) {
                    $("#workCarousel video").get(i).volume = videovolumevar;
                }
                else if (0 > volume && $("#workCarousel .item video").get(i).paused === false) {
                    $("#workCarousel .item video").get(i).pause();
                    videopaused = true;
                }
                else if (0.25 < volume) {
                    $("#workCarousel video").get(i).volume = videovolumevar;
                    if ($("#workCarousel video").get(i).muted === true) {
                        $(".mute-video img").each(function () {
                            $(this).attr("src", "img/video/icon_volume_0.png");
                        });
                    }
                    else if ($("#workCarousel video").get(i).volume === 1) {
                        $(".mute-video img").each(function () {
                            $(this).attr("src", "img/video/icon_volume_4.png");
                        });
                    }
                    else if ($("#workCarousel video").get(i).volume === 0.75) {
                        $(".mute-video img").each(function () {
                            $(this).attr("src", "img/video/icon_volume_3.png");
                        });
                    }
                    else if ($("#workCarousel video").get(i).volume === 0.5) {
                        $(".mute-video img").each(function () {
                            $(this).attr("src", "img/video/icon_volume_2.png");
                        });
                    }
                    else if ($("#workCarousel video").get(i).volume === 0.25) {
                        $(".mute-video img").each(function () {
                            $(this).attr("src", "img/video/icon_volume_1.png");
                        });
                    }
                }
            }
        }
        else if ($("#selectedCarousel").css('display') === 'block') {
            var selVideo = $("#selectedCarousel .carousel-inner .item video");
            var selVideoActive = $("#selectedCarousel .carousel-inner .item.active video");
            for (i = 0; i < selVideo.length; i++) {
                if (0.25 > volume && 0 < volume) {
                    selVideo.get(i).volume = 1 - (1 / 100 * current) * 0.5;
                    if (selVideo.get(i).muted === true) {
                        $(".mute-video img").attr("src", "img/video/icon_volume_0.png");
                    }
                    else {
                        $(".mute-video img").attr("src", "img/video/icon_volume_1.png");
                    }
                    if (videopaused) {
                        selVideoActive.get(i).play();
                        videopaused = false;
                    }
                }
                else if (1 < volume) {
                    selVideo.get(i).volume = videovolumevar;
                }
                else if (0 > volume && selVideo.get(i).paused === false) {
                    selVideo.get(i).pause();
                    videopaused = true;
                }
                else if (0.25 < volume) {
                    selVideo.get(i).volume = videovolumevar;
                    if (selVideo.get(i).muted === true) {
                        $(".mute-video img").each(function () {
                            $(this).attr("src", "img/video/icon_volume_0.png");
                        });
                    }
                    else if (selVideo.get(i).volume === 1) {
                        $(".mute-video img").each(function () {
                            $(this).attr("src", "img/video/icon_volume_4.png");
                        });
                    }
                    else if (selVideo.get(i).volume === 0.75) {
                        $(".mute-video img").each(function () {
                            $(this).attr("src", "img/video/icon_volume_3.png");
                        });
                    }
                    else if (selVideo.get(i).volume === 0.5) {
                        $(".mute-video img").each(function () {
                            $(this).attr("src", "img/video/icon_volume_2.png");
                        });
                    }
                    else if (selVideo.get(i).volume === 0.25) {
                        $(".mute-video img").each(function () {
                            $(this).attr("src", "img/video/icon_volume_1.png");
                        });
                    }
                }
            }
        }
    });
});

function addFunctionality(video, videos, playButton, muteButton, seekBar) {
    playButton.click(function () {
        if (video.get(0).paused == true) {
            video.get(0).play();
            playButton.css("opacity", "0");
            if (viewWidth > 767) {
                $('.carousel-caption').fadeOut();
            }
        }
        else {
            video.get(0).pause();
            playButton.css("opacity", "1");
            if (viewWidth > 767) {
                $('.carousel-caption').fadeIn();
            }
        }
    });
    muteButton.click(function () {
        if (videos.get(0).muted === true) {
            for (i = 0; i < videos.length; i++) {
                videos.get(i).muted = false;
                videos.get(i).volume = 1;
            }
            $(".mute-video img").each(function () {
                $(this).attr("src", "img/video/icon_volume_4.png");
            });
        }
        else if (videos.get(0).volume === 1) {
            for (i = 0; i < videos.length; i++) {
                videos.get(i).volume = 0.75;
            }
            $(".mute-video img").each(function () {
                $(this).attr("src", "img/video/icon_volume_3.png");
            });
        }
        else if (videos.get(0).volume === 0.75) {
            for (i = 0; i < videos.length; i++) {
                videos.get(i).volume = 0.5;
            }
            $(".mute-video img").each(function () {
                $(this).attr("src", "img/video/icon_volume_2.png");
            });
        }
        else if (videos.get(0).volume === 0.5) {
            for (i = 0; i < videos.length; i++) {
                videos.get(i).volume = 0.25;
            }
            $(".mute-video img").each(function () {
                $(this).attr("src", "img/video/icon_volume_1.png");
            });
        }
        else if (videos.get(0).volume === 0.25) {
            for (i = 0; i < videos.length; i++) {
                videos.get(i).muted = true;
            }
            $(".mute-video img").each(function () {
                $(this).attr("src", "img/video/icon_volume_0.png");
            });
        }
        videovolumevar = videos.get(0).volume;
    });
    seekBar.bind('change', function () {
        // Calculate the new time
        var time = video.get(0).duration * (seekBar.val() / 100);
        // Update the video time
        video.get(0).currentTime = time;
    });
    video.bind('timeupdate', function () {
        // Calculate the slider value
        var value = (100 / video.get(0).duration) * video.get(0).currentTime;
        // Update the slider value
        seekBar.val(value);
        seekBar.css("background", "-webkit-gradient(linear, left top, right top, color-stop(" + value + "%, #8a0f33), color-stop(" + value + "%, #d7d7d7))");
        seekBar.css("background", "-moz-linear-gradient(left center, #8a0f33 0%, #8a0f33" + value + "%, #d7d7d7" + value + "%, #d7d7d7 100%)");
    });
    seekBar.bind('mouseup', function () {
        video.get(0).play();
        playButton.css('opacity', '0');
        if (viewWidth > 767) {
            $('.carousel-caption').fadeOut();
        }
    });
    $(window).bind('orientationchange', function (event) {
        document.getElementById('optimizeVideo').load();
    });
}

function allPlayPause() {
    if ($("#all-video").get(0).paused == true) {
        $("#all-video").get(0).play();
        $("#all-play").css("visibility", "hidden");
        $(".all-play img").attr('src', 'img/video/play_button.png');
    }
    else {
        $("#all-video").get(0).pause();
        $("#all-play").css("visibility", "visible");
        $(".all-play img").attr('src', 'img/video/play_button.png');
    }
}

function createElementDataArray(data, array) {
    data.each(function () {
        var temp = $(this).html();
        array.push(temp);
    });
}

function updateAllWorkVideo(item) {
    $("#work-all-section video").html(item.find("video").html());
    $("#work-all-section .video-name").html(item.find(".video-name").html());
    $("#work-all-section .video-location").html(item.find(".video-location").html());
    $("#work-all-section .video-text").html(item.find(".video-text").html());
    $("#work-all-section .additional-info").html(item.find(".additional-info").html());
}

function closeMobileMenu() {
    if ($(window).scrollTop() === 0) {
        $(".navbar-language-mobile").show();
    }
    else {
        $(".navbar-language-mobile").hide();
    };
    $(".navbar-toggle .icon-bar").css('background', '#d12257');
    $("#header-mobile .navbar-toggle").html('<span class="sr-only">Toggle navigation</span>\n' + '                        <span class="icon-bar"></span>\n' + '                        <span class="icon-bar"></span>\n' + '                        <span class="icon-bar"></span>');
    $("#navbar-mobile").animate({
        left: -200
    }, 100, function () {});
    setTimeout(function () {
        $("#navbar-mobile").hide()
    }, 100);
    $(".content").removeClass("opened-menu");
    menuOpened = false;
}

function optimizeWork() {
    var metaWidth = document.getElementById('optimizeVideo').videoWidth;
    var metaHeight = document.getElementById('optimizeVideo').videoHeight;
    var currentViewWidth = window.innerWidth;
    var videoWiewHeight = currentViewWidth * 0.5625;
    var temp = metaWidth / metaHeight;
    var videoHeight = currentViewWidth / temp - 1;
    var mute = videoHeight - 40;
    var mapHeight = window.innerHeight - videoHeight;
    $('head').append('<style type="text/css">' + '@media screen and (max-width: 767px) {' + '#work-section #workCarousel .carousel-control {height: ' + videoHeight + 'px}' + '#work-section #workCarousel .carousel-inner, #work-section{height: auto}' + '#work-section #workCarousel .item video {width: 100%;min-width: auto !important;height: ' + videoWiewHeight + 'px; min-height: auto !important;}' + '#work-section .play-pause {height: ' + videoHeight + 'px}' + '.work-carousel-control {height: ' + videoHeight + 'px; width: 10%}' + '#work-map { height:' + mapHeight + 'px!important}' + '#work-section .mute-video {top: ' + mute + 'px; bottom: auto; width: 50px; left: 0}' + '#work-section .mute-video img {width: 100%}' + '#work-section .seek-bar {top: ' + videoHeight + 'px; border-radius: 0}' + '.carousel-caption {height: ' + mapHeight + 'px!important; overflow-y: scroll;-webkit-overflow-scrolling: touch; pointer-events: auto!important;}' + '}' + '@media only screen and (max-width: 767px) and (orientation: landscape) {' + '#work-map {height: 100vh!important;}' + '}' + '</style>');
};