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


// adapt to orientation

function adapt_to_orientation() {
  var content_width, screen_dimension;

  if (window.orientation == 0 || window.orientation == 180) {
    // portrait
    content_width = 630;
    screen_dimension = screen.width * 0.98; // fudge factor was necessary in my case
  } else if (window.orientation == 90 || window.orientation == -90) {
    // landscape
    content_width = 950;
    screen_dimension = screen.height;
  }

  var viewport_scale = screen_dimension / content_width;

  // resize viewport
  $('meta[name=viewport]').attr('content',
    'width=' + content_width + ',' +
    'minimum-scale=' + viewport_scale + ', maximum-scale=' + viewport_scale);
}

adapt_to_orientation();

$(window).resize(function(){
  adapt_to_orientation();
});


$(window).on("orientationchange",function(){
  adapt_to_orientation();
});
