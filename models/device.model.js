
module.exports = function (mongoose, mongoosePaginate, autopopulate) {
    var Schema = mongoose.Schema,
        autopopulate = require('mongoose-autopopulate')
    

    var deviceSchema = new mongoose.Schema({
        device_id: {type:String},
        name: { type:String},
        created_by: { type: Schema.Types.ObjectId, ref : 'User' },
        created_on: {type: Date, default: Date.now},
        modified_on: {type: Date, default: Date.now},
        status_updated_on: {type: Date, default: Date.now},
        enabled:Boolean,
        deleted:Boolean,
        inactive_duration:{type: Number},
        inactive_duration_unit:{ type:String, enum: ['MONTHS','DAYS','MINUTES'], required:true},
        type: { type:String, enum: ['ESP8266','ORANGE_PI','RESPBERRY_PI'], required:true},
        state: Boolean,
        is_online: {type: Boolean, required: true},
        location: {
            type : {Type:String,default:"Point"},
            coordinates : []
        }
        
    });
    deviceSchema.plugin(mongoosePaginate);
    deviceSchema.plugin(autopopulate);
    deviceSchema.index({device_id:1, name:1},{unique:true})
    return mongoose.model("Device", deviceSchema);
}

// dumy device

// {"device_id": "esp_2343445","enabled": "true","deleted": "false","type" : "SENSOR","state": "ON","status": "OFFLINE"}