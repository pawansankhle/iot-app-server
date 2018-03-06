
module.exports = function (mongoose,mongoosePaginate,autopopulate) {
    var Schema = mongoose.Schema;

    var permissionSchema = new mongoose.Schema({
        description:String,
        id:Number,
        permissionname:{type: String, enum:['user_permission','admin_permission',]}
    });
    
    permissionSchema.plugin(mongoosePaginate);
    permissionSchema.plugin(autopopulate);
    permissionSchema.index({permissionname:1},{unique:true})
    return mongoose.model("Permission",permissionSchema);
}

// db.permissions.insert({permissionname : 'user_permission', description: 'permission for normal user'})
// db.permissions.insert({permissionname : 'admin_permission', description: 'permission for admin user'})
