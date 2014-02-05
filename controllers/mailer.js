var express = require('express'),
    nodemailer = require("nodemailer"),
    
    // Run express
    app = express();


var mailer = function(req, res) {

  var name = req.body.name,
      email = req.body.email,
      message = req.body.message, 
      mailOpts, 
      smtpTrans,
      error;


  // Setup Nodemailer transport to Gmail
  smtpTrans = nodemailer.createTransport('SMTP', {
      service: 'Gmail',
      auth: {
          user: 'email@example.com',
          pass: "password" 
      }
  });


  if (message.length === 0 || email.length === 0 || name.length === 0) {
    // don't submit the form if any of the fields are empty
    error = true
  }


  if (error !== true ) {

    // Mail options
    mailOpts = {
        from: name + ' &lt;' + email + '&gt;', // get form data from the request body object
        to: 'ollie.rog@gmail.com',
        subject: 'Someone sent you an email from your website',
        text:    'Message From: ' + name +  
              ' | email: '        + email + 
              ' | they said: '    + message
    };

    smtpTrans.sendMail(mailOpts, function (error, response) {

        // Email not sent
        if (error) {
            res.render('contact', { 
              title: 'Error'
            })
        }

        // Email sent
        else {
            res.render('contact', {
              title: 'Contact'
            })
        }

    });
  
  }



};

// export the mailer function for use elsewhere
module.exports = mailer;