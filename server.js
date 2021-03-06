require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/client/build/'));
app.get('/', (req,res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');    
})

// CONTROLLERS FOR ROUTES
const UsersController = require('./routes/users')
app.use('/api', UsersController)

const JobsController = require('./routes/jobs')
app.use('/api/jobs', JobsController)

// If the connection throws an error
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
})