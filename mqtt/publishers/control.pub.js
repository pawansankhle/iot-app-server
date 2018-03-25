module.exports = function(logger, mqtt_client) {
    var pub = {};
    console.log();

    pub.publishMsg = function(control){
        var msg = {};
        var topic = "device/control/"
        msg.pin = control.controller_pin;
        msg.controlId = control._id;
        msg.pinState = control.state ? 0 : 1;
        topic += control.control_by.device_id;
        if(mqtt_client.connected){
            mqtt_client.publish(topic,JSON.stringify(msg));
            logger.info("mqtt msg sended => "+ msg);
        }else{
            logger.info("mqtt client not connected unable to send msg::"+ msg);
        }
        mqtt_client
        console.log(msg, topic);
    }

    return pub;

}