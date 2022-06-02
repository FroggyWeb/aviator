$('.intro-card-slider-left').slick({
  dots: true,
  speed: 1000,
  slidesToShow: 1,
  fade: true,
  asNavFor: '.intro-card-slider-right',
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        appendDots: '.intro-card-slider__dots',
        appendArrows: '.intro-card-slider__arrow',
      }
    }
  ]
});

$('.intro-card-slider-right').slick({
  dots: false,
  speed: 1000,
  slidesToShow: 1,
  arrows: false,
  fade: true,
  asNavFor: '.intro-card-slider-left'
});

$('.variant-slider').slick({
  speed: 1000,
  dots: true,
  infinite: false,
  // centerMode: true,
  // slide
  // variableWidth: true,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        variableWidth: true,
        focusOnSelect: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
      }
    }
  ]
});

$('.life-slider').slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  variableWidth: false,
  mobileFirst: true,
  slide: '.life-slider__slide',
  responsive: [{
    breakpoint: 767,
    settings: {
      arrows: true,
      dots: false,
      variableWidth: true,
    }
  }]
});

$('.gift-slider').slick({
  dots: true,
  arrows: false,
  speed: 300,
  slidesToShow: 1,
  appendDots: '.gift-slider .slider-dots',
  slide: '.gift-slider__item',
  mobileFirst: true,
  responsive: [{
    breakpoint: 767,
    settings: {
      arrows: true,
      dots: false,
    }
  }]
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
