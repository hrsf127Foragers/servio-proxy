const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, '../client')));
console.log(__dirname);

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
