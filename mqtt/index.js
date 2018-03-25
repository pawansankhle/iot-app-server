module.exports = function(logger, mqtt_client){
    require('./subscribers/index.js')(logger, mqtt_client);
    require('./publishers/index.js')(logger, mqtt_client);
}