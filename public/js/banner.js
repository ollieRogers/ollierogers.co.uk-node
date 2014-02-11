// fadeScroll.js
// collapsing banner with fading text plugin for jQuery
// Ollie Rogers 2014
// ------------------------------
// ollierogers.co.uk
// https://github.com/ollieRogers
// @ollie_rogers
// ------------------------------


;(function ($) {
  $.fn.blurScroll = function ( options ) {
      
  var options = {
      blurElement: '#blur',          // default fade ID
      opacityElement: '#banner-img', // default bg image ID
      captionSpeed: 2  // set the default speed the text moves at
                       // higher number = slower movement
                       // minus numbers = downwards movement 
  },  
    $banner = this,                               // banner element
    $filter = $banner.find(options.blurElement),  // element to fade
    $opacityElem = $banner.find(options.opacityElement),
    bannerStartHeight = $banner.height() + 85,         // initial height of banner
    filterMove,     // current position of banner elements
    topDist,        // distance scrolled 
    bannerHeight,   // current banner height
    opacity;        // opacity of bg
    

   /*
    *  use scroll event to return a boolean, this is for performance
    *  so you don't have to run the script on every scroll event
    */
    window.onscroll = function(){
    
        topDist = document.body.scrollTop || document.documentElement.scrollTop;
        textOpacity = bannerHeight / bannerStartHeight;
        opacity = textOpacity / 2;

        offsetDist( topDist, textOpacity );
        setOpacity( opacity ) 
        
    };






   /*
    * calculate banner opacity
    */
    setOpacity = function(opacity){

      $opacityElem.css({
        opacity: opacity
      });
    
    }


   /*
    *  calculate the text fade and the top offset
    */
    offsetDist = function(topDist, textOpacity){
      
      bannerHeight = bannerStartHeight - topDist,
      filterMove =  ( topDist / options.captionSpeed );

      $opacityElem.removeClass('fade-in')

      if (bannerHeight > 0){
        $filter.css({
          opacity: textOpacity,
          "transform": 'translatey('+ filterMove +'px)'
        });

      } 
    }
  }

})(jQuery);
