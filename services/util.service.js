module.exports = function(logger){
    var _ = require('underscore')._,
    utilService = {};
    const earthRadiusInMiles = 3959;
    var bCrypt = require('bcrypt-nodejs');

    utilService.milesToRadian = function(miles){
        logger.info("in @utilService => @milesToRadian radius is::",miles);
        return parseInt(miles) / earthRadiusInMiles;
    }

    utilService.KmToMeter = function(km){
        logger.info("in @utilService => @KmToMeter radius in km::",km);
        return parseInt(km) * 1000;
    }

    utilService.errorCallback = function(err){
        logger.error("in @role route @errorCallback",err);
        self.res.status(500).send(err);
    }

    utilService.successCallback = function(data,req,res){
        logger.info("in @role route @errorCallback",err);
        res.status(200).send(data);
    }

    utilService.isPresent = function(obj){
        return obj !== undefined && obj !== null && obj !== {} && obj !== [];
     }

     utilService.isValidPassword = function(user, password){
        return bCrypt.compareSync(password, user.password);
    };
    // Generates hash using bCrypt
    utilService.createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    };

    return utilService;
};