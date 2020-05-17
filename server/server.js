const express = require('express');
const path = require('path');
const app = express();
const port = 8000;
const cors = require('cors');
const axios = require('axios');

app.use(express.static(path.join(__dirname, '../client')));
app.use(cors());

app.get('/restaurants/:restaurant_id/photos', (req, res) => {
  axios.get(`http://18.218.219.141:3001/restaurants/${req.params.restaurant_id}/photos`)
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      console.log(err);
    })
})

app.get('/restaurants/:restaurant_id', (req, res) => {
  axios.get(`http://18.218.219.141:3001/restaurants/${req.params.restaurant_id}`)
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      console.log(err);
    })
})

app.get('/api/:restaurant_id/reviews', (req, res) => {
  axios.get(`http://54.183.220.133:3001/api/${req.params.restaurant_id}/reviews`)
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      console.log(err);
    })
})

app.get('/:collection_id/restaurants', (req, res) => {
  axios.get(`http://13.57.246.172/${req.params.collection_id}/restaurants`)
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      console.log(err);
    })
})

app.get('/:restaurant_id/collections', (req, res) => {
  axios.get(`http://13.57.246.172/${req.params.restaurant_id}/collections`)
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      console.log(err);
    })
})


app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});

