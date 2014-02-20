/*
 * Module dependencies
 */
var express = require( 'express' ),
    stylus = require( 'stylus' ),
    nib = require( 'nib') , 
    mailer = require( "./controllers/mailer" ),
    path = require('path'),
    app = express();


/*
Express settings
*/
app.set( 'port', process.env.PORT || 3000);        // set port
app.set( 'views', path.join(__dirname, 'views'));  // set views location
app.set( 'view engine', 'jade');                   // set jade as view engine
app.use( require('connect-assets')({               // asset pipeline
  src: 'public',
  helperContext: app.locals,
  compress: {
    dev: false, 
    prod: true 
  }
}) );
app.use( express.compress());                      // compress response data with gzip / deflate 
app.use( express.static( __dirname + '/public') ); // location for static files
app.use( express.bodyParser() );                   // use body parser to break down requests
if (process.env.NODE_ENV === 'development'){       // log requests to console in development
  app.use(express.logger('dev'));   
}





/*
 * Set routes
 */
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

app.post('/contact', function (req, res) {
  mailer(req, res);
});

app.get('/*', function(req, res){
  res.render('work', {
    title: '404'
  });
});




/*
 * Start server
 */
app.listen(app.get('port'), function() {
  console.log("✔ server listening on port %d in %s mode", app.get('port'), app.settings.env);
});