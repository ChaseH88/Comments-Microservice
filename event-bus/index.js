const express = require('express');
const app = express();
const { ports } = require('../config.json');
const axios = require('axios');

app.use(express.json());

app.post('/events', (req, res) => {

  const event = req.body;
  console.log('event', event);

  axios.post(`http://localhost:${ports.posts}/events`, event)
  axios.post(`http://localhost:${ports.comments}/events`, event);
  axios.post(`http://localhost:${ports.query}/events`, event)

});

app.listen(ports.eventBus, () =>
  console.log(`Listening on http://${ports.eventBus}/`)
);
