const jwt = require('jsonwebtoken');
const { Router } = require('express');

const User = require('../../bin/models/userModel');

const router = new Router();
const secret = process.env.SECRET;

router.post('/', (req,res) => {
    const { email, password } = req.body;
    console.log("Login Request came in")
    User.findOne({email}, (err,user) => {
        if(err) {
            console.log("Internal Error");
            res.status(500)
                .json({ error: 'Internal error please try again' });
        }
        else if (!user){
            console.log("User Not found");
            res.status(401)
                .json({ error: 'Incorrect email or password'})
        }
        else {
            user.isCorrectPassword(password, (err,same) => {
                if(err){
                    console.log("error decrypting password")
                    res.status(500)
                        .json({ error: 'Internal error please try again' });
                }
                else if(!same){
                    console.log("password Incorrect");
                    res.status(401)
                        .json({ error:'Incorrect email or password' });
                }
                else {
                    console.log("Sending Token");
                    const payload = { email };
                    const token = jwt.sign(payload, secret, {
                        expiresIn: '1h'
                    });
                    res.cookie('token', token, {httpOnly: false}).sendStatus(200);
                }
            })
        }
    })
});

module.exports = router;