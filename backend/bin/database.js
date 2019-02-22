const mongoose = require('mongoose');
require('dotenv').config();

class Database {
    constructor() {
        this._connect();
    }
    _connect() {
        mongoose.connect(process.env.MONGO_URL)
            .then(() => {
                console.log('Connected to MongoDB Succesfully')
            })
            .catch((err) => {
                console.log('Error Connecting to MongoDB');
                console.log(err);
            })
    }
}

module.exports = new Database();