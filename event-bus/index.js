const express = require('express');
const app = express();
const { ports } = require('../config.json');
const axios = require('axios');

app.use(express.json());

const events = [];

app.post('/events', (req, res) => {

  const event = req.body;

  events.push(event);

  const portsArr = [
    ports.posts,
    ports.comments,
    ports.query,
    ports.moderation
  ]

  portsArr.forEach(port => {
    axios.post(`http://localhost:${port}/events`, event);
  });

});

app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(ports.eventBus, () =>
  console.log(`Listening on http://${ports.eventBus}/`)
);
