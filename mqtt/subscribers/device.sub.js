module.exports = function(logger, client){
    
    var deviceService = require('../../services/device.service')(logger);
    var sub = {};

    sub.updateDeviceState = function(clientId,msg){
        deviceService.updateDeviceState(clientId)
        .then(function(res){
            logger.info("in updateDeviceState updated");
        },function(err){
            console.log(err);
            logger.error("in updateDeviceState sub error"+err);
        });
    }

    return sub;

}