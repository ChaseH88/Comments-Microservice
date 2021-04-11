const express = require('express');
const { randomBytes } = require('crypto');
const app = express();
const { ports, routes } = require('../config.json');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const commentsByPostId = {}

app.get(routes.postComments, ({ params }, res) => {
  res.send(commentsByPostId[params.id] || []);
});

app.post(routes.postComments, ({ body, params }, res) => {

  const id = randomBytes(4).toString('hex');
  const { content } = body;

  const comments = commentsByPostId[params.id] || [];

  comments.push({ id, content });

  commentsByPostId[params.id] = comments;

  res.status(201).send(comments);

});

app.listen(ports.comments, () =>
  console.log(`Listening on http://${ports.comments}/`)
);
