module.exports = function(logger){
    var mongoose = require('mongoose'),
        Permission = mongoose.model('Permission'),
        Promise = require('promise'),
        utilService = require('./util.service')(logger),
        service = {};

        service.create = function(permission){
            logger.info("in @permission Service @create permission entry...",permission);
            return new Promise(function(resolve,reject){
                if(utilService.isPresent(permission)){
                        newPermission = new Permission(permission);
                        newPermission.save(function(err,permission){
                            if(err){
                                logger.error("Error in @permission Service @create",err);
                                reject(err)
                            }
                            
                            if(permission){
                                logger.info("permission created with id::",permission._id);
                                return resolve(permission);
                            }
        
                            return reject("Could not Create Permisson!!");
                        });
                }else{
                    return reject("Could not Create empty Permisson!!");
                }
            });  
        };

        service.findByName = function(permissonName) {
            logger.info("in @permission Service @findByName permission entry...",permissonName);
            return new Promise(function(resolve,reject){
                Permission.find()
                .where('permissionname').equals(permissonName)
                .exec(function(err,permission){
                    if(err){
                        logger.error("Error in @permission Service @create",err);
                        reject(err)
                    }
                    if(permission) resolve(permission[0]);

                    reject("could not find permission with name::",permissonName)
                    
                });
            });
        };

        return service;

}