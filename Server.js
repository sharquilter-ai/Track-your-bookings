const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hotel backend is running successfully.');
});

app.listen(process.env.PORT || 10000, () => {
  console.log("Server is running");
});
