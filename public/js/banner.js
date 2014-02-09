// blurScroll.js
// collapsing banner with blurry text plugin for jQuery
// Ollie Rogers 2014
// ------------------------------
// ollierogers.co.uk
// https://github.com/ollieRogers
// @ollie_rogers
// ------------------------------
// MIT License
/*

  Usage 

  $('#yourBanner').blurScroll({
    blurElement: '#yourElement',
    opacityElement: '#banner-img', 
    blurRatio: 20, 
    captionSpeed: 4
  })
  this plugin requires some css
  
    #banner {
      position: relative;
      height: 250px;
      overflow: hidden;
      }
    #blur {
      position:absolute;
      top: 0;
    }
*/

;(function ($) {
  $.fn.blurScroll = function ( options ) {
      
  var options = {
      blurElement: '#blur',          // default blur ID
      opacityElement: '#banner-img', // default bg image ID
      blurRatio: 10,   // set how quickly the element blurs - lower numbers = faster blurring
      captionSpeed: 2  // set the default speed the text moves at
                       // higher number = slower movement
                       // minus numbers = downwards movement 
  },  
    $banner = this,                               // banner element
    $filter = $banner.find(options.blurElement),  // element to blur
    $opacityElem = $banner.find(options.opacityElement),
    bannerStartHeight = $banner.height() + 85,         // initial height of banner
    scrolling,      // true || false depending on if window is currently scrolling
    blur,           // how much blur to apply
    filterMove,     // current position of banner elements
    topDist,        // distance scrolled 
    bannerHeight,   // current banner height
    opacity;        // opacity of bg
    

   /*
    *  use scroll event to return a boolean, this is for performance
    *  so you don't have to run the script on every scroll event
    */
    window.onscroll = function(){
    
      scrolling = true;
        
    };



   /*
    *  show banner after page loaded
    */
    window.onload = function(){

      $opacityElem.removeClass('hidden');
      
    }


   /*
    *  check if user is scrolling, 
    *  if they are perform the blur
    */  
    setInterval(function(){
      
      if( scrolling ){

        topDist = document.body.scrollTop;
        textOpacity = bannerHeight / bannerStartHeight;
        opacity = textOpacity / 2;

        offsetBlur( topDist, textOpacity );
        setOpacity( opacity ) 
        
      } 
      
      scrolling = false; // reset scrolling state 
      
    }, 10);


    setOpacity = function(opacity){
      $opacityElem.css({
        opacity: opacity
      });
    }

   /*
    *  calculate the text fade and the top offset
    */
    offsetBlur = function(topDist, textOpacity){
      
      bannerHeight = bannerStartHeight - topDist,
      blur = topDist/options.blurRatio,
      filterMove =  ( topDist / options.captionSpeed );

      $opacityElem.removeClass('fade-in')

      if (bannerHeight > 0){

        $filter.css({
          opacity: textOpacity,
          "-webkit-transform": 'translateY('+ filterMove +'px)'
        });

      } 
    }
  }

})(jQuery);
