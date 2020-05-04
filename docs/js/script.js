$(function () {
  $('#bootstrap-touch-slider').bsTouchSlider();

  toastr.options = {
    "closeButton": true,
    "debug": false,
    "progressBar": true,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": false,
    "onclick": null,
    "timeOut": "5000",
  }

  // setTimeout(function () {
  //    toastr.success('سلام خوش آمدید ');
  // }, 2000);

  // Swal.fire({
  //   icon: 'success',
  //   title: 'تبریک',
  //   text: 'عملیات با موفقیت انجام شد ',  
  //   confirmButtonText:'بستن'  
  // })

  $('.project__slick').slick({
    infinite:false,
    centerMode: false,
    centerPadding: '60px',
    slidesToShow: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('[data-role="slick-left"]').on('click',function(){
    $('.project__slick').slick('slickPrev');
  })
  $('[data-role="slick-right"]').on('click',function(){
    $('.project__slick').slick('slickNext');
  })
})