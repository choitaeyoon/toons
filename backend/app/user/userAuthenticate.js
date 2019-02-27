const jwt = require('jsonwebtoken');
const { Router } = require('express');

const User = require('../../bin/models/userModel');

const router = new Router();
const secret = process.env.SECRET;

router.post('/', (req,res) => {
    const { email, password } = req.body;
    User.findOne({email}, (err,user) => {
        if(err) {
            res.status(500)
                .json({ error: 'Internal error please try again' });
        }
        else if (!user){
            
        }
        else {
            user.isCorrectPassword(password, (err,same) => {
                if(err){
                    res.status(500)
                        .json({ error: 'Internal error please try again' });
                }
                else if(!same){
                    res.status(401)
                        .json({ error:'Incorrect email or password' });
                }
                else {
                    const payload = { email };
                    const token = jwt.sign(payload, secret, {
                        expiresIn: '1h'
                    });
                    res.cookie('token', token, {httpOnly: true}).sendStatus(200);
                }
            })
        }
    })
});

module.exports = router;