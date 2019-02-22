const mongoose = require('mongoose');
const connectDB = require('./bin/database');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const socket = require('socket.io');

const userRegister = require('./app/user/userRegister');
const userAuthenticate = require('./app/user/userAuthenticate');
const withAuth = require('./app/middleware/checkAuthToken');
const userInfo = require('./app/middleware/getUserInfo');

//Express config
const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

//Routes
app.get('/api/checkToken', withAuth, (req,res) => {
    res.sendStatus(200);
})
app.get('/api/user/userInfo', userInfo, (req,res) => {
    var info = {
        "email": req.email,
        "nickname": req.nickname
    }
    res.status(200).json(info)
})

app.use('/api/user/register', userRegister);
app.use('/api/user/authenticate',userAuthenticate);

server = app.listen(4000, () =>{
    console.log('Listening on port 4000');
})

//Socket config
io = socket(server)

io.on('connection', (socket) => {
    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE',data);
    })
})