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
      }, 
      {
        name: 'theme',
        type: 'list',
        message: 'choose theme',
        choices: ["red-grey", "pink-cream", "blue-orange"]
      }
    ]



// use inquirer to prompt user for app 
// settings at time of deployment
gulp.task('prompt', function () {
  
  inquirer.prompt(prompts, function( answers ) {

    // build form mailer script
    gulp.src('skel/mailer.js')
      .pipe( template({
        email: answers.email,
        passkey: answers.passkey
        }) )
      .pipe(gulp.dest('controllers'));

    // assign theme
    gulp.src('skel/style.styl')
      .pipe( template({
        theme: answers.theme
        }))
      .pipe(gulp.dest('public/stylesheets'));
  })

})




// set gulp default
gulp.task('default', ['prompt']);

