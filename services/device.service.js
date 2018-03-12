module.exports = function(logger){
    var mongoose = require('mongoose'),
    _ = require('underscore')._,
    Device = mongoose.model('Device'),
    utilService = require('./util.service')(logger),
    moment = require('moment');
    service = {};

    service.findAll = function(req){
        logger.info("in @DeviceSrv @findAll entry...");
        var condition = {deleted:false};
        condition = enableFilter(condition, req);  // enable filter for user
        return new Promise(function(resolve,reject){
            Device.find(condition)
            .exec(function(err,devices){
                if(err){
                    logger.error("in @DeviceSrv @findAll error::",err);
                }
                resolve(devices);
            });
        })
        
    }


    service.search = function(query,req){
        logger.info("in @DeviceSrv @search entry...");
        var condition = {deleted:false};
            condition = enableFilter(condition, req);  // enable filter for user
        return new Promise(function(resolve,reject){
            Device.paginate(condition, query, function(err, result) {
                if(err){
                    logger.error("in @DeviceSrv @search error::",err);
                }
                resolve(result);
            });
        });
        
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
                            resolve({success:false,message:"device addedd successfully!!"})
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
        

    service.enableDisable = function(deviceId,enabled){
        logger.info("in @DeviceSrv enable entry..",deviceId,enabled);
        return new Promise(function(resolve,reject){
            try{
                Device.findOneAndUpdate({ "_id" : deviceId }, { $set: { "enabled": enabled } },{new : true},function(err,device){
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
                if(deviceId){
                    Device.findOneAndUpdate({ "device_id" : deviceId }, { $set: { deleted: true } },{new : true},function(err,device){
                        if(err) reject(err)
                        
                        if(device) resolve({success:true,message:"device Deleted Successfully!!"})
                    });
                }else{
                    resolve({success:false,message:"deviceID cannot be empy!!"}) 
                }
                
            }catch(e){
                logger.error("in @deviceService @method delete",e)
                console.log(e);
            }
        });
        
    }

    /** this method run from mqtt subscriber */
    service.updateDeviceState = function(deviceId){
        logger.info("in @DeviceSrv @updateDeviceState entry..",deviceId);
        return new Promise(function(resolve,reject){
            try{
                if(deviceId){
                    Device.findOneAndUpdate({ "device_id": deviceId, "deleted": false }, { $set: { is_online: true, status_updated_on: new Date() } },{new : true}, function(err,device){
                        if(err) reject(err)
                        
                        if(device) resolve({success:true,message:"device updated Successfully!!"})
                    });
                }else{
                    resolve({success:false,message:"deviceID cannot be empy!!"})  
                }

            }catch(e){
                logger.error("in @deviceService @method delete",e)
                console.log(e);
            }
        });
    }


    /** this method run from shcedular */
    service.checkAndUpdateStatus = function() {
        logger.info("in @DeviceSrv @updateDeviceStatus entry..");
        try{
            Device.find({deleted:false})
            .exec(function(err,devices){
                if(err){
                    logger.error("in @DeviceSrv @findAll error::",err);
                }
                _.each(devices, function(device){
                    updateStatus(device);
                });
            });

        }catch(e){
            logger.error("in @deviceService @method delete",e)
            console.log(e);
        }

    }

    function updateStatus(device){
        try{
            logger.info("in @DeviceSrv @checkAndUpdateStatus entry..");
            var inactiveTime = device.inactive_duration;
            var unit = device.inactive_duration_unit.toLowerCase();
            var startTime = moment(device.status_updated_on);
            var endTime = moment();
            var duration = endTime.diff(startTime, unit);
            console.log("duration::", duration);
            console.log("inactiveTime::", inactiveTime);
            if(duration > inactiveTime) {
                Device.findOneAndUpdate({ "device_id": device.device_id, "deleted": false }, { $set: { is_online: false } },{new : true}, function(err,device){
                    if(err)
                    logger.error("in @deviceService @method checkAndUpdateStatus",err);
                    
                    if(device) 
                        logger.info("device updated Successfully Id" + device.device_id);
                });
            }
        }catch(e){
            logger.error("in @deviceService @method checkAndUpdateStatus",e)
            console.log(e);
        }
    }

    function enableFilter(condition,req){
        try{
            condition.created_by = null;
            console.log(req.user);
            if(req.user){
                condition.created_by = req.user._id;
            }
            return condition;

        }catch(e){
            logger.error("in @deviceService @method enableFilter",e)
            console.log(e);
        }
    }

    return service;
};

