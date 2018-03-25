module.exports = function(logger, client){
    
    var controlService = require('../../services/control.service')(logger);
    var sub = {};

    sub.updateControlState = function(clientId,msg){

        if(typeof msg === "string") {
            msg = JSON.parse(msg);
        }

        var controlId = msg.controlId;
        var enabled = msg.pinState == 0 ? true : false;
        var controllerId = clientId;
        controlService.updateControlState(controlId, controllerId, enabled)
        .then(function(res){
            logger.info("in updateControlState updated");
        },function(err){
            console.log(err);
            logger.error("in updateControlState sub error"+err);
        });
    }

    return sub;

}