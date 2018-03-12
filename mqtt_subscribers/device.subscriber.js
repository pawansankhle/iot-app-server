module.exports = function(logger, client){
    
    var deviceService = require('../services/device.service')(logger);

    client.on('message', function (topic, message) {
        console.log('message recived..', topic);
        logger.info('mqtt message recived topic =>' + topic);
        var myTopic = get_topic(topic);
        var clientId = get_client_id(topic);
        perform_action(clientId, message.toString())
    });


    function perform_action(clientId, msg){
        deviceService.updateDeviceState(clientId)
        .then(function(res){
            console.log(res);
        },function(err){
            console.log(err);
        });
    }

    function get_topic(topic) {
        if(undefined !== topic)
          return topic.split("/")[1];
      
    }
  
    function get_client_id(topic) {
        if(undefined !== topic)
          return topic.split("/")[2];
    }
    
}