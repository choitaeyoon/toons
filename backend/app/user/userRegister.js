const User = require('../../bin/models/userModel');
const { Router } = require('express');

const router = new Router();

router.post('/',(req,res) => {
    const { nickname, email, password } = req.body;
    User.findOne({email}, (err, user) => {
        if(err) {
            console.log("Internal Error");
            res.status(500)
                .json({ error: 'Internal error please try again' });
        }
        else if(user){
            res.status(202)
                .send("Error: User already exists.")
        }
    })
    const user = new User({ nickname, email, password });
    user.save(function(err){
        if(err){
            console.log(err)
            res.status(500)
                .send("Error registering new user.");
        }
        else {
            res.status(200).send("Welcome to Toons!");
        }
    })
})

module.exports = router;