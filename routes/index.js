module.exports = function(app,settings,logger,mongoose){
    require('./permission.route')(app,settings,logger,mongoose);
    require('./role.route')(app,settings,logger,mongoose);
    require('./user.route')(app,settings,logger,mongoose);
    require('./device.route')(app,settings,logger,mongoose)
    require('./main')(app,settings,logger,mongoose);
}
