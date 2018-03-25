var LocalStrategy   = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Role = mongoose.model('Role');
var Permission = mongoose.model('Permission');


module.exports = function(passport,logger){
    var utilService = require('./services/util.service')(logger);
    // Passport needs to be able to serialize and deserialize users to support persistent login sessions
    passport.serializeUser(function(user, done) {
        //tell paspros which id to use 
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {

        User.findById(id,function(err,user){
            // console.log('deserializing user:',user.username);
            if(err){
                done(err,false);
            }
            if(!user){
                done('user not found', false);
            }
             done(err, user);
        });
    });

    passport.use('login', new LocalStrategy({
            passReqToCallback : true
        },
        function(req, username, password, done) { 
            
            User.findOne({username:username},function(err, user){
                if(err)
                {
                   return done(err, false);
                }

                // if user not exist
                if(!user)
                {
                    return done(null, false, { message: 'Unknown user' });
                }
                if(!utilService.isValidPassword(user,password))
                {
                    //wrong password
                    return done('incorrent password', false);
                }
                return done(null, user);
            })
            
        }
    ));

    passport.use('signup', new LocalStrategy({
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) {
            console.log(username, password);
            User.findOne({username: username},function(err, user){
                console.log(err);
                if(err)
                {
                    return done(err);
                }
                
                if(user)
                {
                    //we have already sign this user up
                    console.log('user already exist with username'+ username);
                    return done(null, false)
                }else{
                    var newUser = new User();
                    var role = new Role();
                    var permission = new Permission();
                    permission.description = "user permission";
                    permission.permissionname = Permission.schema.path('permissionname').enumValues[0]
                    role.roleName = Role.schema.path('rolename').enumValues[0];
                    role.permissions = [permission];
                    newUser.username = username;
                    newUser.password = utilService.createHash(password);
                    newUser.roles = [role];
                    
                    newUser.save(function(err){
                        if(err){
                            console.log('error in savig user'+err);
                            throw err;
                        }
                        console.log(newUser.username + ' Registration succesful');
                        return done(null,newUser);
                    })
                }
            });
        })
    );

    

};