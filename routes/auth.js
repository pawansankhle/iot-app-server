var exports = module.exports = {};

exports.isAuthenticated = function(req, res, next) {
   if(req.method === 'GET' || req.method === 'OPTIONS'){
            return next();
    }
    // return  next();
    console.log(req.user);
    if(req.isAuthenticated()){
        return next();
    }
     res.status(401).send({success:false,message:"Unauthorize"});
    }

   
    
   



