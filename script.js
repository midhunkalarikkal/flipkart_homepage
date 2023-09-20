
$(document).ready(function () {
    $('.scroll-arrow').on('click', function () {
        const direction = $(this).hasClass('left') ? '-=' : '+=';
        $('.overflow-auto').animate({
            scrollLeft: direction + '100'
        }, 300);
    });
});

