var gulp = require('gulp'),
    gutil = require('gulp-util'),
    template = require('gulp-template'),
    inquirer = require('inquirer');
    prompts = [
      {
        name: 'email',
        type: 'input',
        message: 'email address',
        validate: function(input) {
          // basic validattion to prevent
          // empty field entry from breaking mailer
          var done = this.async();
          setTimeout(function() {
            if (input.length === 0) {
              done("email cannot be empty");
              return;
            }
            done(true);
          }, 300);
        }
      },
      {
        name: 'passkey',
        type: 'input',
        message: 'gmail application passkey',
        validate: function(input) {
          // basic validattion to prevent
          // empty field entry from breaking mailer
          var done = this.async();
          setTimeout(function() {
            if (input.length === 0) {
              done("email cannot be empty");
              return;
            }
            done(true);
          }, 300);
        }
      }
    ]



// use inquirer to prompt user for app
// settings at time of deployment
gulp.task('prompt', function () {

  inquirer.prompt(prompts, function( answers ) {

    // build form mailer script
    gulp.src('skel/secrets.js')
      .pipe( template({
        email: answers.email,
        passkey: answers.passkey
        }) )
      .pipe(gulp.dest('config'));

    // assign theme
    gulp.src('skel/style.styl')
      .pipe( template({
        theme: answers.theme
        }))
      .pipe(gulp.dest('public/css'));
  })

});




// set gulp default
gulp.task('default', ['prompt']);
