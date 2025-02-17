// app.js
const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello from Dockerized App on GCE!');
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
