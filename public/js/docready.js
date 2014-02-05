// run plugins on docready in one place

;(function($){


  $('#banner').blurScroll({
    blurElement: '#blur',
    opacityElement: '#banner-img'
  })

  $('img.lazy').unveil();


})(jQuery);