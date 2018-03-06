module.exports = function (mongoose,mongoosePaginate, autopopulate) {
    var Schema = mongoose.Schema,
    permissionSchema = mongoose.model('Permission').schema;
    
 
    var rolesSchema = new mongoose.Schema({
        roleid:Number,
        rolename:{ type:String, enum:['ROLE_USER','ROLE_ADMIN','ROLE_VENDOR'] },
        description:String,
        permissions:[{type:Schema.Types.ObjectId, ref: 'Permission', autopopulate: true }]
    });

    rolesSchema.plugin(mongoosePaginate);
    rolesSchema.plugin(autopopulate);
    rolesSchema.index({rolename:1,description:1},{unique:true})
    return mongoose.model("Role", rolesSchema);
}

// db.roles.insert({    "rolename" : 'ROLE_ADMIN',    "description" : "admin role" })
// db.roles.insert({"rolename" : 'ROLE_USER',"description" : "user role"})


 