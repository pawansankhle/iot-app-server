module.exports = function(logger){
    var mongoose = require('mongoose'),
        Address = mongoose.model('Address'),
        Promise = require('promise'),
        addressService = {};

    
    addressService.create = function(address){
        logger.info("inside @create entry...");
        return new Promise(function(resolve,reject){
            var newAddress = new Address(address);
            newAddress.save(function(err,address){
                if (err){
                    return reject(err);
                    logger.error("inside @create address Error...",err);
                }
                if(address){
                    logger.info("inside @create address created ...",address._id);
                    return resolve(address);
                } 

                reject("could not create address");
                
            });
        });
        
        
        return newAddress;
    }
    return addressService;
}