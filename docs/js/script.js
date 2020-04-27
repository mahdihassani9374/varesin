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

  setTimeout(function () {
     toastr.success('سلام خوش آمدید ');
  }, 2000);

  Swal.fire({
    icon: 'success',
    title: 'تبریک',
    text: 'عملیات با موفقیت انجام شد ',  
    confirmButtonText:'بستن'  
  })
})