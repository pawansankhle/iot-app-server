module.exports = function(app, settings,logger,mongoose){
    var mongoose = require('mongoose'),
        auth = require('./auth'),
        express = require('express'),
        roleRouter = express.Router(),
        service = require('../services/role.service')(logger),
        utilService = require('../services/util.service')(logger)
        
    
    roleRouter.use(auth.isAuthenticated);
    
    
    roleRouter.route('/')
    .get(function(req,res){
        logger.info("in @role route GET eNTRY..");
        return service.findAll()
        .then(function(data){
            res.status(200).send(data);
        },function(err){
            res.status(500).send(err);
        });

    })
    .post(function(req,res){
        logger.info("in @role route POST eNTRY..");
        return service.create(req.body)
        .then(function(data){
            res.status(200).send(data);
        },function(err){
            res.status(500).send(err);
        })
    });

    app.use('/api/role', roleRouter);
}