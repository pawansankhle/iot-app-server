module.exports = function(logger, mqtt_client){
    require('./device.subscriber.js')(logger, mqtt_client);
}