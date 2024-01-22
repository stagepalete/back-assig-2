const express = require('express');
const path = require('path');
const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/templates/index.html`)
});

module.exports = app;
