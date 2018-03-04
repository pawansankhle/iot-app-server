

var mongoose = require('mongoose');
var appConstant = require('./app.constants');
mongoose.Promise = global.Promise;
mongoose.connect(appConstant.mongoUrl);
