const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware for BodyParser
app.use(bodyParser.json());


// Go create the config folder and keys.js and put the MongoDB URI there


// Configure the DB
const db = require('./config/keys').mongoURI;


// Connect to MongoDB using mongoose
mongoose
 .connect(db)
 .then( () => console.log('MongoDB Connected...') )
 .catch( err => console.log(err) );


// Create a variable for the port we're going to use for server deployment
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));