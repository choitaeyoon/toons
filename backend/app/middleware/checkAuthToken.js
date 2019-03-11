const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

const withAuth = function(req,res,next) {
    console.log(req.headers);
    const token = 
        req.body.token ||
        req.query.token ||
        req.headers['x-access-token'] || 
        req.cookies.token;

    if(!token) {
        console.log("Cant authenticate with no token.");
        res.status(401).send('Unauthorized: No Token Provided');
    }
    else {
        jwt.verify(token, secret, function(err,decoded){
            if(err){
                console.log("Error verifying token.")
                res.status(401).send('Unauthroized: Invalid Token');
            }
            else {
                console.log("Successfully verified token.")
                req.email = decoded.email;
                next();
            }
        });
    }
}

module.exports = withAuth;