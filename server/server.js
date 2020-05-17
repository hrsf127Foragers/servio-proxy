const express = require('express');
const path = require('path');
const app = express();
const port = 8000;
const cors = require('cors');
const axios = require('axios');

app.use(express.static(path.join(__dirname, '../client')));
app.use(cors());

app.get('/restaurants/:restaurant_id/photos', (req, res) => {
  console.log(req.params);
  axios.get(`http://18.218.219.141:3001/restaurants/${req.params.restaurant_id}/photos`)
    .then((result) => {
      console.log(result.data);
      res.send(result.data);
    })
})

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
