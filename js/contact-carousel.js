$('.multi-item-carousel').carousel({
    interval: false
});

$('.multi-item-carousel .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    if (next.next().length>0) {
        next.next().children(':first-child').clone().appendTo($(this));
    } else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
});

$('.multi-item-carousel .item .office:nth-child(1)').attr({"href":"#contactCarousel", "data-slide":"prev"}).addClass("previous-slide-item-click");
$('.multi-item-carousel .item .office:nth-child(3)').attr({"href":"#contactCarousel", "data-slide":"next"}).addClass("next-slide-item-click");

$(".previous-slide-item-click").click(function () {
    checkLocation(0);
});
$(".next-slide-item-click").click(function () {
    checkLocation(2);
});