const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userController = require('./controller/user');

const port = 5000;
const app = express();

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('DB connected');
  })
  .catch((err) => {
    console.log('Connection error:', err);
  });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post('/signup', userController.signup);

app.listen(port, () => {
  console.log(`Backend Running at port ${port}`);
});
