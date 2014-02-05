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
  $.fn.blurScroll = function (options) {
      
  var options = {
      blurElement: '#blur',          // default blur ID
      opacityElement: '#banner-img', // default bg image ID
      blurRatio: 14,   // set how quickly the element blurs - lower numbers = faster blurring
      captionSpeed: 4  // set the default speed the text moves at
                       // higher number = slower movement
                       // minus numbers = downwards movement 
  },  
    $banner = this,                               // banner element
    $filter = $banner.find(options.blurElement),  // element to blur
    $opacityElem = $banner.find(options.opacityElement),
    bannerStartHeight = $banner.height(),         // initial height of banner
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
    *  check if user is scrolling, 
    *  if they are perform the blur
    */  
    setInterval(function(){
      
      if(scrolling){

        topDist = document.body.scrollTop;
        opacity = (bannerHeight / bannerStartHeight) / 2

        offsetBlur(topDist);
        setOpacity(opacity) 
        
      } 
      
      scrolling = false; // reset scrolling state 
      
    }, 10);


    setOpacity = function(opacity){
      $opacityElem.css({
        opacity: opacity
      });
    }

   /*
    *  calculate the blur and the top offset
    */
    offsetBlur = function(topDist){
      
      bannerHeight = bannerStartHeight - topDist,
      blur = topDist/options.blurRatio,
      filterMove = 0 - ( topDist / options.captionSpeed);

      if (bannerHeight > 0){

        $banner.css({
          height: bannerHeight + 'px' 
        });

        $filter.css({
          "-webkit-filter": "blur(" + blur + "px)",
          "-webkit-transform": 'translateY('+ filterMove +'px)'
        });

      } else {

         $banner.css({
            height: '0px' 
         });

      }
    }
  }

})(jQuery);
