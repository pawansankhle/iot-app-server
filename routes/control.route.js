module.exports = function(app, settings,logger,mongoose){
    var express = require('express'),
          router = express.Router(),
          auth = require('./auth'),
          service = require('../services/control.service')(logger);
          utiService = require('../services/util.service')(logger);
          
  
    router.use(auth.isAuthenticated);
  
    router.route('/')
    .post(function(req,res){
        logger.info("in @controlRoute => @create control..");
        var newControl = req.body;
        if(req.user) {
            newControl.created_by = req.user._id;
            newControl.modified_by = req.user._id;
        }
        
        return service.create(newControl)
        .then(function(data){
          res.status(200).send(data);
        },function(err){
            res.status(500).send(err);
        })
      })
    .get(function(req,res){
        logger.info("in @controlRoute going to find All controls..");
        return service.findAll(req)
        .then(function(data){
          res.status(200).send(data);
        },function(err){
            res.status(500).send(err);
        })
  
    })
  
    router.route('/enable/:id/:enabled')
    .post(function(req,res){
      logger.info("in @controlRoute enable entry..");
      var  controlId = req.params.id
      var enabled = req.params.enabled
      return service.enableDisable(controlId,enabled)
      .then(function(control){
         res.status(200).send(control);
      },function(err){
        res.status(500).send(err);
      })
    })
  
    router.route('/removeById/:controlId')
    .post(function(req,res){
      logger.info("in @controlRoute enable entry..");
      var controlId = req.params.controlId
      return service.delete(controlId)
      .then(function(control){
         res.status(200).send(control);
      },function(err){
        res.status(500).send(err);
      })
    })


    router.route('/search')
    .get(function(req,res){
      logger.info("in @controlRoute enable entry..");
      var query = utiService.getPaginationParams(req);
      return service.search(query, req)
      .then(function(controles){
         res.status(200).send(controles);
      },function(err){
        res.status(500).send(err);
      })
    })
  
  app.use('/api/control', router);
  }