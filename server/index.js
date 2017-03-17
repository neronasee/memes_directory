const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');

const router = require('./router.js');

const app = express();
mongoose.connect('mongodb://localhost/memes');

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());

router(app);

const port = process.env.PORT || 3030;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);
