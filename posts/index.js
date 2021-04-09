//@ts-check
const express = require('express');
const { randomBytes } = require('crypto');
const port = require('../ports.json');

const app = express();

app.use(express.json())

const posts = {}

app.get('/post', (req, res) => {
  console.log('testing')
  res.send(posts);
});

app.post('/post', ({ body }, res) => {

  const id = randomBytes(4).toString('hex');
  const { title } = body;

  posts[id] = { id, title };

  res.status(201).send(posts[id])

});

app.listen(port.posts, () =>
  console.log(`Listening on http://${port.posts}/`)
);