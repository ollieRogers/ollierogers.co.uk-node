// run plugins on docready in one place

;(function($){

  // blurry banner for desktop only
  if(!Modernizr.touch){
    $('#banner').blurScroll({
      blurElement: '#blur',
      opacityElement: '#banner-img'
    })
  }

  // lazy load images
  $('img.lazy').unveil();


})(jQuery);