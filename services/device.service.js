module.exports = function(logger){
    var mongoose = require('mongoose'),
    _ = require('underscore')._,
    Device = mongoose.model('Device'),
    utilService = require('./util.service')(logger),
    service = {};

    service.findAll = function(){
        logger.info("in @DeviceSrv @findAll entry...");
        return new Promise(function(resolve,reject){
            Device.find({deleted:false})
            .exec(function(err,devices){
                if(err){
                    logger.error("in @DeviceSrv @findAll error::",err);
                }
                resolve(devices);
            });
        })
        
    }

    service.create = function(device){
        logger.info("in @DeviceSrv @create entry...");
        try{
            return new Promise(function(resolve,reject){
                var newDevice = new Device(device);
                    newDevice.save(function(err,device){
                        if(err){
                            logger.error("Error in @device Service @create",err);
                            reject(err);
                        }
                        if(device){
                            logger.info("in @device Service @create created with id",device._id);
                            resolve(device)
                        }
                        reject("Could not create device!!");
                    });

                },function(err){
                    reject(err);
                })
           }catch(e){
            logger.error("in @DeviceSrv @method enableDisable",e)
            }
            
    }
        

    service.enableDisable = function(deviceId,enabledObj){
        logger.info("in @DeviceSrv enable entry..",deviceId,enabledObj);
        return new Promise(function(resolve,reject){
            try{
                Device.findOneAndUpdate({ "_id" : deviceId }, { $set: { enabled: enabledObj } },{new : true},(err,device) =>{
                        if(err) reject(err);
                        
                        if(device) resolve(device)
                });
            }catch(e){
                logger.error("in @DeviceSrv @method enableDisable",e)
                console.log(e);
                reject(e)
            }
        });
        
    }




    service.delete = function(deviceId){
        logger.info("in @DeviceSrv delete entry..",deviceId);
        return new Promise(function(resolve,reject){
            try{
                User.findOneAndUpdate({ "_id" : deviceId }, { $set: { deleted: true } },{new : true},(err,device) =>{
                        if(err) reject(err)
                        
                        if(user) resolve({success:true,message:"device Deleted Successfully!!"})
                });
            }catch(e){
                logger.error("in @deviceService @method delete",e)
                console.log(e);
            }
        });
        
    }

    return service;
};

