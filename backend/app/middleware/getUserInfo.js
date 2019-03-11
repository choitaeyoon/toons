const jwt = require('jsonwebtoken');
const User = require('../../bin/models/userModel');

const secret = process.env.SECRET;

const withAuth = function(req,res,next) {
    const token = 
        req.body.token ||
        req.query.token ||
        req.headers['x-access-token'] || 
        req.cookies.token;

    if(!token) {
        console.log("No Token In getuserinfo");
        res.status(401).send('Unauthorized: No Token Provided');
    }
    else {
        jwt.verify(token, secret, function(err,decoded){
            if(err){
                console.log("Wrong Token In getuserinfo");
                res.status(401).send('Unauthroized: Invalid Token');
            }
            else {
                var email = decoded.email;
                req.email = email;
                User.findOne({ email }, (err, result) => {
                    if(err){
                        res.status(500)
                            .json({ error: 'Internal error please try again' });
                    }
                    else if(!result){
                        console.log("incorrect user or password in getuserinfo")
                        res.status(401)
                            .json({ error:'Incorrect email or password' });
                    }
                    else {
                        req.nickname = result.nickname;
                    }
                    next();
                })
                
            }
        });
    }
}

module.exports = withAuth;