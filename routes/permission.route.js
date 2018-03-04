module.exports = function(app, settings,logger,mongoose){
    var mongoose = require('mongoose'),
        auth = require('./auth'),
        express = require('express'),
        router = express.Router(),
        service = require("../services/permission.service")(logger);

    router.use(auth.isAuthenticated);
    router.route('/')
    .get(function(req,res){
        logger.info("in @permissioin route GET eNTRY..");
        return service.findAll()
        .then(function(data){
            res.status(200).send(data);
        },function(err){
            res.status(500).send(err);
        });

    })
    .post(function(req,res){
        logger.info("in @permissioin route POST eNTRY..");
        return service.create(req.body)
        .then(function(data){
            res.status(200).send(data);
        },function(err){
            res.status(500).send(err);
        })
    });

    app.use('/api/permission', router);
}