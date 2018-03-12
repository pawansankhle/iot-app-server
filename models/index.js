
module.exports = function(mongoose, mongoosePaginate,autopopulate){
require('./address.model.js')(mongoose, mongoosePaginate,autopopulate);
require('./permission.model.js')(mongoose, mongoosePaginate,autopopulate);
require('./role.model.js')(mongoose, mongoosePaginate,autopopulate);
require('./user.model.js')(mongoose, mongoosePaginate,autopopulate);
require('./device.model.js')(mongoose, mongoosePaginate,autopopulate);
require('./control.model.js')(mongoose, mongoosePaginate,autopopulate);

}
