$(function () {
  $('#bootstrap-touch-slider').bsTouchSlider();

  $('.project__slick').slick({
    lazyLoad: 'ondemand',
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
})