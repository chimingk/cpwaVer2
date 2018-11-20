const express = require('express');
const express = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware for BodyParser
app.use(bodyParser.json());

