/*
 * Module dependencies
 */
var express = require( 'express' ),
    stylus = require( 'stylus' ),
    nib = require( 'nib') , 
    mailer = require( "./controllers/mailer" ),
    jscompressor = require( 'node-minify' ),
    app = express();




/*
 * return boolean to compress in production
 * when in development run on command line with:
 *     NODE_ENV=development node app
 * or if you have nodemon installed:
 *     NODE_ENV=development nodemon app.js
 * in prodution run:
 *     node app
 */
var isdevmode = ( process.env.NODE_ENV === 'development' )? true : false ;





// path to Jade views
app.set( 'views', __dirname + '/views' );

// tell Express that we want to use Jade for views
app.set( 'view engine', 'jade' );

// compress jade html output for production
app.locals.pretty = isdevmode;





if(!isdevmode){
  // compress and concatenate js files using node-minify (only in production)
  new jscompressor.minify({
      type: 'uglifyjs',
      fileIn: [ 
         './public/js/modernizr.min.js',
         './public/js/jquery-2.0.3.min.js', 
         './public/js/banner.js', 
         './public/js/jquery.unveil.js', 
         './public/js/form.js', 
         './public/js/docready.js' ],
      fileOut:  './public/js/build.js' 
  });
}


// in development log incoming requests to the console.
if(isdevmode){
  app.use( express.logger( 'dev' ) );
}


/*
 * Stylus settings 
 */
function compile(str, path) {
  return stylus(str)
    .set( 'filename', path )
    .set( 'linenos', isdevmode )
    .set( 'compress', !isdevmode )
    .use( nib() )
}

// compile .styl files to CSS, where 'public' is the directory to compile to
app.use(stylus.middleware(
  { src: __dirname + '/public',
    compile: compile
  }
))




/*
 * express static middleware, used for serving static files,
 * tell express that static files will live in a folder called 'public'
 */
app.use( express.static( __dirname + '/public') );



// use body parser to break down requests
app.use( express.bodyParser() );



/*
 * Set routes
 */

// home page
app.get('/', function(req, res){
  res.render('work', {
    title: 'Designer & Front End Developer'
  });
});

app.get('/contact', function(req, res){
  res.render('contact', {
    title: 'contact'
  });
});

app.get('/experiments', function(req, res){
  res.render('experiments', {
    title: 'experiments'
  });
});

// form post request on contact page
app.post('/contact', function (req, res) {
  mailer(req, res);
});

app.get('/*', function(req, res){
  res.render('work', {
    title: '404'
  });
});






// some reassurance if in dev mode
if(isdevmode){
  console.log('Hi Ollie :)');
}
  

// listen on port 3000
app.listen(3000);