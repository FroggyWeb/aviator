$('.life-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  variableWidth: true
});

$('.gift-slider').slick({
  dots: true,
  speed: 300,
  slidesToShow: 1,
  appendDots: '.gift-slider .slider-dots',
  slide: '.gift-slider__item'
});

$('.sideimg-slider').slick({
  dots: true,
  speed: 300,
  slidesToShow: 1,
  appendDots: '.sideimg-slider .slider-dots',
  slide: '.sideimg-slider__item'
});

$('.video-slider').slick({
  dots: true,
  speed: 300,
  slidesToShow: 1,
  appendDots: '.video-slider .slider-dots-full',
  slide: '.video-slider__item'
});

///more text
$('.more-clip').each(function () {
  const link = $(this).find('.more-clip__link')
  const parent = $(this).closest('.more-clip')
  const moreClose = link.data('moreclose')
  const moreOpen = link.data('moreopen')
  link.on('click', function () {
    parent.toggleClass('open')
    if (parent.hasClass("open")) {
      link.html(moreOpen)
    } else {
      link.html(moreClose)
    }
  })
})
