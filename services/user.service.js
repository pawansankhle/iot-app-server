module.exports = function(logger){
    var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Permission = mongoose.model('Permission'),
    Promise = require('promise'),
    _ = require('underscore')._,
    roleService = require('./role.service')(logger),
    utilService = require('./util.service')(logger),
    permissionService = require('./permission.service')(logger),
    service = {};

    service.findAll = function(){
        logger.info("in @userService @findAll entry...");
        return new Promise(function(resolve,reject){
            User.find({deleted:false})
            .exec(function(err,users){
                if(err){
                    logger.error("in @userService @findAll error::",err);
                }
                resolve(users);
            });
        })
        
    }

    service.create = function(user){
        logger.info("in @userService @create entry...");
        try{
            return new Promise(function(resolve,reject){
                var role = user.roles[0];
                if(utilService.isPresent(role)){
                    roleService.findByName(role.rolename)
                    .then(function(roleObj){
                        logger.info("@user service @create find role by name::",roleObj._id);
                        permissionService.findByName(user.roles[0].permission.permissionname)
                        .then(function(permissionObj){
                            logger.info("@user service @create findpermision by name::",permissionObj._id);
                            var rolepermission = {};
                            rolepermission.role = roleObj._id;
                            rolepermission.permission = permissionObj._id;
    
                            rolePermissionService.create(rolepermission)
                            .then(function(rolepermissionObj){
                                addressService.create(user.addresses[0])
                                .then(function(addressesObj){
                                    user.addresses = [];
                                    user.addresses.push(addressesObj._id);
                                    var newUser = new User(user);
                                    newUser.roles = [];
                                    newUser.roles.push(rolepermissionObj._id);
                                    newUser.enabled = false;
                                    newUser.deleted = false;
                                    newUser.password = utilService.createHash(newUser.password);
                                    newUser.save(function(err,user){
                                        if(err){
                                            logger.error("Error in @userService @create::",err);
                                            reject(err);
                                        }
                
                                        if(user){
                                            logger.info("in @userService @created with Id::",user._id);
                                            resolve(user);
                                        }
                                        reject("could not create User!!");
                                    });
                            },function(err){
                                reject(err); 
                            })
                            
                            },function(err) {
                                reject(err);
                            })
                        },function(err){
                            reject(err)
                        })
                    },function(err){
                        reject(err);
                    })
                }
            });
        }catch(e){
            logger.error("in @userService @method enableDisable",e)
            console.log(e);
            reject(e)
        }
            
    }
        

    service.enableDisable = function(userId,enabledObj){
        logger.info("in @userService enable entry..",userId,enabledObj);
        return new Promise(function(resolve,reject){
            try{
                User.findOneAndUpdate({ "_id" : userId }, { $set: { enabled: enabledObj } },{new : true},(err,user) =>{
                        if(err) reject(err);
                        
                        if(user) resolve(user)
                });
            }catch(e){
                logger.error("in @userService @method enableDisable",e)
                console.log(e);
                reject(e)
            }
        });
        
    }


    service.edit = function(userId,userDetail){
        logger.info("in @userService edit entry..",userId,userDetail);
        return new Promise(function(resolve,reject){
            try{
                User.findOneAndUpdate({ "_id" : userId }, { 
                    $set: 
                    { 
                        username: userDetail.username,
                        firstname: userDetail.firstname,
                        lastname:userDetail.lastname,
                        email:userDetail.email,
                        mobile:userDetail.mobile
                    } 
                },{new : true},function(err,user){
                        if(err) reject(err);
                        
                        if(user) resolve(user)
                });
            }catch(e){
                logger.error("in @userService @method edit",e)
                console.log(e);
                reject(e)
            }
        });
        
    }

    service.delete = function(userId){
        logger.info("in @userService delete entry..",userId);
        return new Promise(function(resolve,reject){
            try{
                User.findOneAndUpdate({ "_id" : userId }, { $set: { deleted: true } },{new : true},(err,user) =>{
                        if(err) reject(err)
                        
                        if(user) resolve({success:true,message:"user Deleted Successfully!!"})
                });
            }catch(e){
                logger.error("in @userService @method enableDisable",e)
                console.log(e);
            }
        });
        
    }

    return service;
};

