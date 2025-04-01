$('.my-slideshow').cycle({
    fx: 'fade',
    speed: 3000,
    timeout: 1,
    startingSlide: Math.floor(Math.random() * 5), // where 6 is the slidecount
    containerResize: 0,
    before: function (currSlideElement, nextSlideElement, options, forwardFlag) {
        var container = $(this).parent();
        container.css('height', Math.max(container.height(), $(nextSlideElement).height()));
    },
    after: function (currSlideElement, nextSlideElement, options, forwardFlag) {
        $(this).parent().css('height', $(this).height());
    }
});
