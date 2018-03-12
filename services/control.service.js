module.exports = function(logger){
    var mongoose = require('mongoose'),
        Control = mongoose.model('Control'),
        Promise = require('promise'),
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
                    return resolve(address);
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

    service.enableDisable = function(controlId,enabled){
        logger.info("in @ControlSrv enable entry..",controlId,enabled);
        return new Promise(function(resolve,reject){
            try{
                Control.findOneAndUpdate({ "_id" : controlId }, { $set: { "enabled": enabled } },{new : true},function(err,control){
                        if(err) reject(err);
                        
                        if(control) resolve(control)
                });
            }catch(e){
                logger.error("in @ControlSrv @method enableDisable",e)
                console.log(e);
                reject(e)
            }
        });
        
    }

    return service;
}