module.exports = function(app, settings,logger,mongoose){
    var express = require('express'),
          router = express.Router(),
          auth = require('./auth'),
          service = require('../services/device.service')(logger);
          
  
    router.use(auth.isAuthenticated);
  
    router.route('/')
    .post(function(req,res){
        logger.info("in @deviceRoute => @create device..");
        var newDevice = req.body;
        if(req.user) {
            newDevice.created_By = req.user._id;
            newDevice.modified_By = req.user._id;
        }
        
        return service.create(req.body)
        .then(function(data){
          res.status(200).send(data);
        },function(err){
            res.status(500).send(err);
        })
      })
    .get(function(req,res){
        
        logger.info("in @deviceRoute going to find All devices..");
        return service.findAll()
        .then(function(data){
          res.status(200).send(data);
        },function(err){
            res.status(500).send(err);
        })
  
    })
  
    router.route('/enable/:id/:enabled')
    .post(function(req,res){
      logger.info("in @deviceRoute enable entry..");
      var  deviceId = req.params.id
      var enabled = req.params.enabled
      return service.enableDisable(deviceId,enabled)
      .then(function(device){
         res.status(200).send(device);
      },function(err){
        res.status(500).send(err);
      })
    })
  
    router.route('/delete/:id')
    .post(function(req,res){
      logger.info("in @deviceRoute enable entry..");
      var deviceId = req.params.id
      return service.delete(deviceId)
      .then(function(device){
         res.status(200).send(device);
      },function(err){
        res.status(500).send(err);
      })
    })
  
  app.use('/api/device', router);
  }