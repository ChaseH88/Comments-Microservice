const express = require('express');
const { randomBytes } = require('crypto');
const { ports, routes, event } = require('../config.json');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(express.json())

const posts = {}

app.get(routes.post, (req, res) => {
  res.send(posts);
});

app.post(routes.post, async ({ body }, res) => {

  const id = randomBytes(4).toString('hex');
  const { title } = body;

  posts[id] = { id, title };

  await axios.post(`http://localhost:${ports.eventBus}/events`, {
    type: event.postCreated,
    data: { id, title }
  })

  res.status(201).send(posts[id])

});

app.post('/events', ({ body }, res) => {
  console.log('Received Event: ', body.type);
  res.send({});
});

app.listen(ports.posts, () =>
  console.log(`Listening on http://${ports.posts}/`)
);
