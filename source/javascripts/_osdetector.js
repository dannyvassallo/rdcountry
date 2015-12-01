if(/(iPhone|iPad|iPod)\sOS\s7/.test(navigator.userAgent)) {
    initiOSfixer();
}
if(/(iPhone|iPad|iPod)\sOS\s8/.test(navigator.userAgent)) {
    initiOSfixer();
}
if(/(iPhone|iPad|iPod)\sOS\s9/.test(navigator.userAgent)) {
    initiOSfixer();
}

function initiOSfixer(){
  $(window).on('resize orientationchange', fixHeightOnIOS7);
  $('body').css('position', 'fixed');
  $('.gate').css('height', document.height);
  fixHeightOnIOS7();
}
