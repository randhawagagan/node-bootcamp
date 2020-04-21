const express = require('express');
const app = express();
const port = 9999;

app.get('/', (req, res) => {
  res.send('ahsdfjgkhbnmhgf')
})

app.listen(port, () => {
  console.log(`App listening on ${port}`);
})