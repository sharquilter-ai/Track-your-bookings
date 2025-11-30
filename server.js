const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hotel backend is running successfully.');
});

app.listen(10000, () => {
  console.log('Server is running on port 10000');
});
