module.exports = function (mongoose, mongoosePaginate, autopopulate) {
    var Schema = mongoose.Schema,
        autopopulate = require('mongoose-autopopulate')
    

    var controlSchema = new mongoose.Schema({
        name: { type:String},
        created_by: { type: Schema.Types.ObjectId, ref : 'User' },
        created_on: {type: Date, default: Date.now},
        modified_on: {type: Date, default: Date.now},
        deleted: Boolean,
        type: { type:String, enum: ['BUTTON','SENSOR'], required:true},
        state: Boolean,
        control_by: { type: Schema.Types.ObjectId, ref : 'Device' }
    });

    controlSchema.plugin(mongoosePaginate);
    controlSchema.plugin(autopopulate);
    controlSchema.index({device_id:1, name:1},{unique:true})
    return mongoose.model("Control", controlSchema);
}
