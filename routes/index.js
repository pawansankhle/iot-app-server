module.exports = function(app,settings,logger,mongoose, mqtt_client){
    require('./permission.route')(app,settings,logger,mongoose, mqtt_client);
    require('./role.route')(app,settings,logger,mongoose, mqtt_client);
    require('./user.route')(app,settings,logger,mongoose, mqtt_client);
    require('./device.route')(app,settings,logger,mongoose, mqtt_client)
    require('./control.route')(app,settings,logger,mongoose, mqtt_client)
    require('./main')(app,settings,logger,mongoose, mqtt_client);
}
