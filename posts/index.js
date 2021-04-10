//@ts-check
const express = require('express');
const { randomBytes } = require('crypto');
const { ports, routes } = require('../ports.json');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json())

const posts = {}

app.get(routes.post, (req, res) => {
  res.send(posts);
});

app.post(routes.post, ({ body }, res) => {

  const id = randomBytes(4).toString('hex');
  const { title } = body;

  posts[id] = { id, title };

  res.status(201).send(posts[id])

});

app.listen(ports.posts, () =>
  console.log(`Listening on http://${ports.posts}/`)
);
