const mongoose = require('mongoose');





mongoose.connect('mongodb://127.0.0.1:27017/CSV_Upload');

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;