
module.exports = function(config, logger){
    const mqtt = require("mqtt");
    const client = mqtt.connect(config.broker_url,{
        port : config.broker_port,
        username: config.broker_username,
        password: config.broker_password
    });

   client.on('connect', function () {
        console.log("mqtt client connected...");
        logger.info("mqtt client connected...");
        for(i=0; i < config.mqtt_topics.length; i++){
            var topic = config.mqtt_topics[i];
            logger.info("subscribed to topic : " + topic);
            client.subscribe(topic)
            
        }
        
   });

    return client;
}
