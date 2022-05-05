const express = require('express');
const contact = require('./sendMessage/contact')

const app = express();

app.use('/sendMessage', contact);
/* app.get('/', (req, res) => {
  res.send('Hello NodeJS!')
}) */

const port = process.env.PORT || 5050;

app.listen(port, () => console.log(`Server is running on port ${port}`))