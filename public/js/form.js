;(function($){

// TODO - add a fallback that doesn't rely on transitionend 

  // form submition with ajax
  $('body').on('submit', '#contact', function( event ) {

    var $form = $( this ),
        name = $( "#name" ).val(),
        email = $( "#email" ).val(),
        message = $( "#message" ).val(),
        allFields = $( "#message, #email, #name" ),  
        $submitButton = $("#submit"),
        processingClass = 'processing',
        valid = false,
        dataString = 'name=' + name
                   + '&email=' + email
                   + '&message=' + message;
    
    /* 
     * On Submit
     */ 

    event.preventDefault();  // prevent standard form submittion 
    
    (name.length * email.length * message.length === 0 )? valid = false : valid = true; // Do some dumb validation



    /* 
     * Post the form 
     */ 
    if( valid ){

      $form.addClass( processingClass ); // change form class while waiting for post response
      $submitButton[0].disabled = true;  // only allow one submition at a time by disabling the submit button

      $.ajax( {  
        type: "POST",  
        url: "/contact",  
        data: dataString,  
        success: function() {  
          $submitButton[0].disabled = false;    // enable submit button again
          $form.removeClass( processingClass ); // change back the forms class after submittion
          allFields.val( '' );                  // reset inputs 
          $form.addClass('thanks')
          $submitButton.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){ 
            setTimeout(function(){
              $form.removeClass('thanks');
            }, 500)
          });
        },  
        error: function(){
          // TODO do something for Form Error
        }
      });  
    } else {
      alert('NOPE')
    }


  });



})(jQuery);