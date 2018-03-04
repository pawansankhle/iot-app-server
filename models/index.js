
module.exports = function(mongoose){
require('./address.model.js')(mongoose);
require('./permission.model.js')(mongoose);
require('./role.model.js')(mongoose);
require('./user.model.js')(mongoose);
require('./device.model.js')(mongoose);

}
