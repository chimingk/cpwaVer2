const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


//so that server.js can find items.js for the api routes
const items = require('./routes/api/items');


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
//		process.env.PORT is for deployment to Heroku purposes
const port = process.env.PORT || 5000;



// Now we want to be able to interact with our API
// (1) Get | (2) Post | (3) Delete
// Use Routes
//    Anything that goes to /api/items should refer to the items variable defined earlier
app.use('/api/items', items)







// This is just a check to see if it successfully connected to the mongoDB
app.listen(port, () => console.log(`Server started on port ${port}`));



