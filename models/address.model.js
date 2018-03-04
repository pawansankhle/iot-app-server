
module.exports = function (mongoose) {
    
    var addressSchema = new mongoose.Schema({
        pincode: String,
        street: String,
        created_on: {type: Date, default: Date.now},
        
    });

 mongoose.model("Address", addressSchema);
}

