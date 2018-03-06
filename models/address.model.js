
module.exports = function (mongoose, mongoosePaginate, autopopulate) {
    
    
    var addressSchema = new mongoose.Schema({
        pincode: String,
        street: String,
        created_on: {type: Date, default: Date.now},
        
    });
 
    addressSchema.plugin(mongoosePaginate);
    addressSchema.plugin(autopopulate);
    mongoose.model("Address", addressSchema);
}

