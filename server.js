const express = require('express');
const wasm = require('./wasm').exports;

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/add', (req, res) => {
  const { a, b } = req.query;
  res.send('' + wasm.add(a, b));
});

const server = app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

// Exports
module.exports = {
  server,
};
