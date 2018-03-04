module.exports = function (mongoose) {
    var rolesSchema = mongoose.model('Role').schema,
        Schema = mongoose.Schema;
        AddressSchema = mongoose.model('Address').schema,
        autopopulate = require('mongoose-autopopulate')

    var userSchema = new mongoose.Schema({
        username: String,
        password: String,
        created_on: { type: Date, default: Date.now },
        created_By: { type: Schema.Types.ObjectId, ref: 'User' ,autopopulate:true},
        modified_By: { type: Schema.Types.ObjectId, ref: 'User',autopopulate:true },
        enabled:Boolean,
        deleted:Boolean,
        firstname:String,
        lastname:String,
        email:String,
        mobile:String,
        // image:{ type:Schema.Types.ObjectId,ref: 'File',autopopulate:true },
        addresses:[{type:Schema.Types.ObjectId , ref: 'Address',autopopulate:true}],
        roles:[{type:Schema.Types.ObjectId , ref: 'Role',autopopulate:true}],

    });
    userSchema.plugin(autopopulate);

    return mongoose.model("User", userSchema);
}

