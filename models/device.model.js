
module.exports = function (mongoose) {
    var Schema = mongoose.Schema,
        autopopulate = require('mongoose-autopopulate')
    

    var deviceSchema = new mongoose.Schema({
        device_id: {type:String},
        created_by: { type: Schema.Types.ObjectId, ref : 'User' },
        created_on: {type: Date, default: Date.now},
        enabled:Boolean,
        deleted:Boolean,
        type: { type:String, enum: ['SENSOR','BUTTON'], required:true},
        state: {type: String, enum: ['ON','OFF'], required: true},
        status: {type: String, enum: ['ONLINE','OFFLINE'], required: true},
        location: {
            type : {Type:String,default:"Point"},
            coordinates : []
        }
        
    });
    deviceSchema.index({device_id:1},{unique:true})
    return mongoose.model("Device", deviceSchema);
}

// dumy device

// {"device_id": "esp_2343445","enabled": "true","deleted": "false","type" : "SENSOR","state": "ON","status": "OFFLINE"}