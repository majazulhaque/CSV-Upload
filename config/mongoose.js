const mongoose = require('mongoose');





mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;

//'mongodb://127.0.0.1:27017/CSV_Upload'

//mongodb+srv://majazhaq98:5GjGPlljnRd0RroL@cluster0.2keidbn.mongodb.net/CSV_upload