module.exports = function(app, settings,logger,mongoose){
  var express = require('express'),
        router = express.Router(),
        auth = require('./auth'),
        service = require('../services/user.service')(logger),
        addressService = require('../services/address.service')(logger),
        roleService = require('../services/role.service')(logger),
        permissionService = require('../services/permission.service')(logger),
        utilService = require('../services/util.service')(logger);
        

  router.use(auth.isAuthenticated);

  router.route('/')
  .post(function(req,res){
      logger.info("in @userRoute => @create user..");
      var newUser = req.body;
      if(req.user) {
        newUser.created_By = req.user._id;
        newUser.modified_By = req.user._id;
      }
      
      return service.create(req.body)
      .then(function(data){
        res.status(200).send(data);
      },function(err){
          res.status(500).send(err);
      })
    })
  .get(function(req,res){
      
      logger.info("in @userRoute going to find All users..");
      return service.findAll()
      .then(function(data){
        res.status(200).send(data);
      },function(err){
          res.status(500).send(err);
      })

  })

  router.route('/enable/:id/:enabled')
  .post(function(req,res){
    logger.info("in @userRoute enable entry..");
    var  userId = req.params.id
    var enabled = req.params.enabled
    return service.enableDisable(userId,enabled)
    .then(function(user){
       res.status(200).send(user);
    },function(err){
      res.status(500).send(err);
    })
  })

  router.route('/delete/:id')
  .post(function(req,res){
    logger.info("in @userRoute enable entry..");
    var userId = req.params.id
    return service.delete(userId)
    .then(function(user){
       res.status(200).send(user);
    },function(err){
      res.status(500).send(err);
    })
  })


  router.route('/edit/:id')
  .post(function(req,res){
    logger.info("in @userRoute edit entry..");
    var userId = req.params.id
    return service.edit(userId,req.body)
    .then(function(user){
       res.status(200).send(user);
    },function(err){
      res.status(500).send(err);
    })
  })

 app.use('/api/user', router);
}