$(document).ready(function () {
//    $("body").css("display", "none");
    $("body").fadeIn(2000);
    var linkLocation;
    $("a.transition").each(function (i, el) {
        $(el).click(function (event) {
            event.preventDefault();
            linkLocation = this.href;
            $("body").fadeOut(1000, redirectPage);
        })
    });

    function redirectPage() {
        window.location = linkLocation;
    };

    var contents = $('.posted-job-desc');
    var titles = $('.posted-job');
    titles.on('click', function () {
        var title = $(this);
        contents.filter(':visible').slideUp(function () {
            $(this).prev('.posted-job').removeClass('is-opened');
        });

        var content = title.next('.posted-job-desc');

        if (!content.is(':visible')) {
            title.addClass('is-opened');
            content.slideDown();
        }
    });

});
