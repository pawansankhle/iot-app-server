var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var mongoose = require('mongoose');
var db  = require("./core/db"); //connect to mongodb
var config = require('./core/config') // get app config
const log4js = require('log4js');  // get debug log4js
const log4j = require('./core/log4j')(log4js);
const logger = log4js.getLogger('debug');  // set log {debug,info}
var validator = require('validator');
var jwt = require('jwt-simple');
var mqtt_client = require('./core/mqtt.connection')(config, logger);
const autopopulate = require('mongoose-autopopulate');
const mongoosePaginate = require('mongoose-paginate');
var settings = {};


require('./models/index.js')(mongoose,mongoosePaginate, autopopulate); // get models for app
require('./mqtt_subscribers/index.js')(logger, mqtt_client); // connect to broker and subscribe topic

require('./core/shedular.js')(logger) // schedule jobs

var authenticate = require('./routes/authenticate')(passport,config,jwt);

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', true);
  next();
}




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('env','development');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('dev'));

app.use(allowCrossDomain);
app.use(session({
  secret: config.secret,
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 3600000 },
  store: new MongoStore({ mongooseConnection: mongoose.connection })
  }));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.cookieSession());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());

require('./routes/index.js')(app, settings, logger,mongoose);


//initialize passport
var initPassport = require('./passport-init');
initPassport(passport,logger);

// app.use('/api', api);
app.use('/auth', authenticate);


 
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace


if ('development' === 'development') {
  
  app.use(function(err, req, res, next) {
    console.log(err);
    res.status(err.status || 500);
    res.send({
      message: err.message,
      success: false
    });
    // res.render('error', {
    //   message: err,
    //   error: err
    // });
    
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
module.exports = app;
