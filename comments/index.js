const express = require('express');
const { randomBytes } = require('crypto');
const app = express();
const { ports, routes, event, commentStatus } = require('../config.json');
const cors = require('cors');
const axios = require('axios');

app.use(cors());
app.use(express.json());

const commentsByPostId = {}

app.get(routes.postComments, ({ params }, res) => {
  res.send(commentsByPostId[params.id] || []);
});

app.post(routes.postComments, async ({ body, params }, res) => {

  // Generate a random ID for the comment
  const id = randomBytes(4).toString('hex');

  // Grab the request data
  const { content } = body;

  // Grab the array of comments associated with the post id by grabbing id param from url
  const comments = commentsByPostId[params.id] || [];

  // Push a brand new comment into the array
  comments.push({
    id,
    content,
    status: commentStatus.pending
  });

  // Update the comments by post id
  commentsByPostId[params.id] = comments;

  // Send the comment created event to the event bus
  await axios.post(`http://localhost:${ports.eventBus}/events`, {
    type: event.commentCreated,
    data: {
      id,
      content,
      postId: params.id,
      status: commentStatus.pending
    }
  })

  // Complete the request and return the comments array
  res.status(201).send(comments);

});

app.post('/events', ({ body }, res) => {
  console.log('Received Event: ', body.type);
  res.send({});
});

app.listen(ports.comments, () =>
  console.log(`Listening on http://${ports.comments}/`)
);
