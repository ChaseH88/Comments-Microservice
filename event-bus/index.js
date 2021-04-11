const express = require('express');
const app = express();
const { ports } = require('../ports.json');
const axios = require('axios');

app.use(express.json());

app.post('/events', ({ body }, res) => {

  const { event } = body;

  axios.post(`http://localhost:${ports.client}/events`, event)
  axios.post(`http://localhost:${ports.posts}/events`, event)
  axios.post(`http://localhost:${ports.comments}/events`, event);

});

app.listen(ports.eventBus, () =>
  console.log(`Listening on http://${ports.eventBus}/`)
);
