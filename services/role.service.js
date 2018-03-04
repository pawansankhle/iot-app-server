module.exports = function(logger){
    var mongoose = require('mongoose'),
        Role = mongoose.model('Role'),
        Promise = require('promise'),
        service = {};

        service.create = function(role){
            logger.info("in @roleService @create role entry...",role);
            return new Promise(function(resolve,reject){
                var newRole = new Role(role);
                    newRole.save(function(err,role){
                        if(err){
                            logger.error("Error in @role Service @create",err);
                            reject(err);
                        }
                        if(role){
                            logger.info("in @role Service @create created with id",role._id);
                            resolve(role)
                        }
                        reject("Could not create role!!");
                    });

                },function(err){
                    reject(err);
                })
            };


        service.findAll = function(){
            logger.info("in @role service @findAll entry..");
            return new Promise(function(resolve,reject){
             Role.find()
             .populate('permissions')
             .exec(function(err,roles){
                 if(err){
                     logger.error("in @role service @findAll Error",err);
                     reject(err);
                 }
                
                 if(roles) resolve(roles);
                 
                 reject("Could not find any roles!!")
             })
            });
 
         }
 

        service.findByName = function(roleName){
           logger.info("in @role service @findbyNames entry..",roleName);
           return new Promise(function(resolve,reject){
            Role.find()
            .where("rolename")
            .equals(roleName)
            .exec(function(err,role){
                if(err){
                    logger.error("in @role service @findbyNames Error",err);
                    reject(err);
                }
                if(role) resolve(role[0]);
                
                console.log("going to reject");
                reject("Could not find any roles!!")
            });
           });

        }

        return service;

}