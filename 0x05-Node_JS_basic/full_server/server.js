const express = require('express');

const port = 1245;
const hostname = '127.0.0.1';

const app = express();

app.listen(port, hostname, () => {
  console.log(`listening on port ${port}`)
})

module.exports = app;
