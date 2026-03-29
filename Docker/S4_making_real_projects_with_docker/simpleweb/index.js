const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, minha bela galera do b2trainig! Tudo show por aí?');
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
