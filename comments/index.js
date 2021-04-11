const express = require('express');
const { randomBytes } = require('crypto');
const app = express();
const { ports, routes, event } = require('../config.json');
const cors = require('cors');
const axios = require('axios');

app.use(cors());
app.use(express.json());

const commentsByPostId = {}

app.get(routes.postComments, ({ params }, res) => {
  res.send(commentsByPostId[params.id] || []);
});

app.post(routes.postComments, async ({ body, params }, res) => {

  const id = randomBytes(4).toString('hex');
  const { content } = body;

  const comments = commentsByPostId[params.id] || [];

  comments.push({ id, content });

  commentsByPostId[params.id] = comments;

  await axios.post(`http://localhost:${ports.eventBus}/events`, {
    type: event.commentCreated,
    data: {
      id,
      content,
      postId: params.id
    }
  })

  res.status(201).send(comments);

});

app.post('/events', ({ body }, res) => {
  console.log('Received Event: ', body.type);
  res.send({});
});

app.listen(ports.comments, () =>
  console.log(`Listening on http://${ports.comments}/`)
);
