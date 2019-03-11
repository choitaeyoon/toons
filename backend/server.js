const mongoose = require('mongoose');
const connectDB = require('./bin/database');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const socket = require('socket.io');
const cors = require('cors');

const userRegister = require('./app/user/userRegister');
const userAuthenticate = require('./app/user/userAuthenticate');
const withAuth = require('./app/middleware/checkAuthToken');
const userInfo = require('./app/middleware/getUserInfo');

//Express config
const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

const corsOptions = {
    origin: [process.env.URL],
    credentials: true
};

app.use(cors(corsOptions));
app.options(cors(corsOptions));

//Routes
app.get('/api/checkToken', withAuth, (req,res) => {
    console.log(req.cookies);
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

var server = app.listen(process.env.PORT || 3000, () =>{
    console.log(`Listening on port ${ process.env.PORT }`);
})

//Socket config
io = socket(server);

var onlineUsers = [];

io.on('connection', (socket) => {
    socket.on('NEW_CONNECTION', function(data){
        onlineUsers.push({
            "nickname": data.nickname,
            "socketID": socket.client.id
        })
        console.log(data.nickname, 'connected')
        io.emit('ONLINE_USERS_UPDATE', onlineUsers);
    })

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE',data);
    })

    socket.on('disconnect', function(){
        let discUserIndex = onlineUsers.findIndex(user => user.socketID === socket.client.id);
        console.log(onlineUsers[discUserIndex].nickname, 'disconnected');
        onlineUsers.splice(discUserIndex, 1);
        io.emit('ONLINE_USERS_UPDATE', onlineUsers);
    })
})