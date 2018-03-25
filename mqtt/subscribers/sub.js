module.exports = function(logger, client){
    var deviceSub = require('./device.sub')(logger),
        controlSub = require('./control.sub')(logger);
        TOPICS = ['status', 'control'];

    client.on('message', function (topic, message) {
        console.log('message recived..', topic);
        logger.info('mqtt message recived topic =>' + topic);
        var myTopic = get_topic(topic);
        var clientId = get_client_id(topic);
        perform_action(myTopic, clientId, message.toString())
    });

    function get_topic(topic) {
        if(undefined !== topic)
          return topic.split("/")[1];
      
    }

    function get_client_id(topic) {
        if(undefined !== topic)
          return topic.split("/")[2];
    }

    function perform_action(topic, clientId, msg){
        switch(topic) {
            case TOPICS[0]:
                deviceSub.updateDeviceState(clientId,msg);
                break;
            case TOPICS[1]:
                controlSub.updateControlState(clientId,msg);
                break;

        }
        
    }
}