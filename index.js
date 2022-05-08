const express = require('express');
const contact = require('./sendMessage/contact');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use('/sendMessage', contact);


/* app.get('/', (req, res) => {
  res.send('Hello NodeJS!')
}) */

const port = process.env.PORT || 5050;

app.listen(port, () => console.log(`Server is running on port ${port}`))