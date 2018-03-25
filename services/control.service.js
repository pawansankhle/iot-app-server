module.exports = function(logger, mqtt_client){
    var mongoose = require('mongoose'),
        Control = mongoose.model('Control'),
        Promise = require('promise'),
        control_pub = require('../mqtt/publishers/control.pub')(logger, mqtt_client);
        service = {};

        service.findAll = function(req){
            logger.info("in @ControlSrv @findAll entry...");
            var condition = {deleted:false};
            condition = enableFilter(condition, req);  // enable filter for user
            return new Promise(function(resolve,reject){
                Control.find(condition)
                .exec(function(err,controls){
                    if(err){
                        logger.error("in @ControlSrv @findAll error::",err);
                    }
                    resolve(controls);
                });
            })
            
        }
    
        service.create = function(control){
        logger.info("inside @controlService  @create entry...");
        return new Promise(function(resolve,reject){
            var newControl = new Control(control);
            newControl.save(function(err,control){
                if (err){
                    return reject(err);
                    logger.error("inside @create control Error...",err);
                }
                if(control){
                    logger.info("inside @create control created ...",control._id);
                    return resolve(control);
                } 

                reject({success:false, msg:"could not create control"});
            });
        });
        
        
        return newControl;
    }

    service.search = function(query,req){
        logger.info("in @ControlSrv @search entry...");
        var condition = {deleted:false};
            condition = enableFilter(condition, req);  // enable filter for user
        return new Promise(function(resolve,reject){
            Control.paginate(condition, query, function(err, result) {
                if(err){
                    logger.error("in @controlSrv @search error::",err);
                }
                resolve(result);
            });
        });
        
    }

    service.onOff = function(controlId,enabled,oldControl){
        logger.info("in @ControlSrv enable entry..",controlId,enabled);
        return new Promise(function(resolve,reject){
            try{
                Control.findOneAndUpdate({ "_id" : controlId }, { $set: { "state": enabled } },{new : true},function(err,control){
                        if(err) reject(err);
                        
                        if(control) {
                            control_pub.publishMsg(oldControl);
                            resolve(control)
                        }
                });
            }catch(e){
                logger.error("in @ControlSrv @method enableDisable",e)
                console.log(e);
                reject(e)
            }
        });
        
    };

    service.updateControlState = function(controlId,controllerId,enabled){
        logger.info("in @DeviceSrv @updateControlState entry..",controlId,controllerId);
        return new Promise(function(resolve,reject){
            try{
                if(controlId){
                    Control.findOneAndUpdate({ "_id": controlId, "control_by.device_id": controllerId }, { $set: { state: enabled, modified_on: new Date() } },{new : true}, function(err,control){
                        if(err) reject(err)
                        
                        if(control) resolve({success:true,message:"control updated Successfully!!"})
                    });
                }else{
                    resolve({success:false,message:"control cannot be empy!!"})  
                }

            }catch(e){
                logger.error("in @deviceService @method delete",e)
                console.log(e);
            }
        });
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
}