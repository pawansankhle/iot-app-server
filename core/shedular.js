
module.exports = function(logger) {
    var schedule = require('node-schedule'),
        deviceService = require('../services/device.service')(logger);
        
    
    var j = schedule.scheduleJob('0 * * * * *', function(){
        logger.info("going to start schedular..");
        console.log('The answer to life, the universe, and everything!');
        deviceService.checkAndUpdateStatus();
    });

}
