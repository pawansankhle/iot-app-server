var express = require('express');
var router = express.Router();
module.exports = function(passport,config,jwt){

    //sends successful login state back to angular
    router.get('/success',function(req, res){
        var user = req.user;
        var token = jwt.encode(user, config.secret || 'superkey');
        req.session.token = token;
        res.send({success: true,token: token});
    });

    //sends failure login state back to angular
    router.get('/failure',function(req, res) {
        res.send({success: false, user: null, message: "Invalid username or password"});
    });

    //log in
    // router.post('/login', passport.authenticate('login', {
    //     // successRedirect: '/auth/success',
    //     failureRedirect: '/auth/failure'
    // }),(req, res) => {
    //     var user = req.user;
    //     var token = jwt.encode(user, config.secret || 'superkey');
    //     req.session.token = token;
    //     res.send({success: true,token: token});
    // });


    router.post('/login',  function(req, res, next) {
        passport.authenticate('login', function(err, user, info) {
            if (err) {
                return next(err); // will generate a 500 error
              }
            
              if (! user) {
                return res.send({ success : false, message : 'Invalid username or password' });
              }
              req.login(user, function(loginErr){
                if (loginErr) {
                  return next(loginErr);
                }

                var user = req.user;
                var token = jwt.encode(user, config.secret || 'superkey');
                req.session.token = token;
                res.send({success: true,token: token});
                });
            
        })(req, res, next);
    });

    //sign up
    router.post('/signup', passport.authenticate('signup', {
        // successRedirect: '/auth/success',
        failureRedirect: '/auth/failure',
    }),function(req, res){
        var user = req.user;
        var token = jwt.encode(user, config.secret || 'superkey');
        req.session.token = token;
        res.send({success: true,token: token});
    });

    //log out
    router.get('/signout', function(req, res) {
        req.logout();
        //res.redirect('/');
        res.send({success: true,message: "logout Successfully!!"});
    });

    return router;

}