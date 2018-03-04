module.exports = function(app, settings,looger,mongoose){
	var url = require('url'),
		express = require('express'),
		rootRouter = express.Router();

	// Any generic logic can go here
	rootRouter.use(function(req, res, next) {
		// res.send('{status:200, msg: "it is working"}');
		next();
	});

	app.use('/',rootRouter);
};