$(window).scroll(function () {
    var s = $(this).scrollTop(),
        h = $('#header').height();
    if (s < h)
        $('#menuprincipal').css('top', h - s);
    else
        $('#menuprincipal').css('top', 0);
});