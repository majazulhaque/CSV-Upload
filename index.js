require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ limit: '10mb', parameterLimit: 1000000 }));

// app.use(express.urlencoded({ limit: '10mb', parameterLimit: 1000000 }));

//Server static files
app.use(express.static('assets'));

app.use(expressLayouts);

console.log(process.env);

//ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));





//routes
app.use('/', require('./routes/csvRoutes'));

//server listening
app.listen(port, (err) => {
    if(err) console.log("error listening on", `${port}`);

    console.log('listening on port', `${port}`);
})
