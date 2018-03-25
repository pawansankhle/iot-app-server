module.exports = function(logger, mqtt_client){
    require('./control.pub.js')(logger, mqtt_client);
}