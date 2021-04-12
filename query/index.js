const express = require('express');
const { ports, event } = require('../config.json');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(express.json())

const posts = {}

const handleEvent = (type, data) => {

  // Post Created Event
  if (type === event.postCreated) {

    const { id, title } = data;

    posts[id] = {
      id,
      title,
      comments: []
    };

  }

  // Comment Created Event
  if (type === event.commentCreated) {
    const { id, content, postId, status } = data;

    const post = posts[postId];

    post.comments.push({
      id, content, status
    });


  }

  // Comment Updated Event
  if (type === event.commentUpdated) {
    const { id, content, postId, status } = data;

    const post = posts[postId];
    const comment = post.comments.find(comment => (
      comment.id === id
    ));

    comment.status = status;
    comment.content = content;
  }

}

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {

  const { type, data } = req.body;

  handleEvent(type, data);

  res.send({});

});

app.listen(ports.query, async () => {
  console.log(`Listening on http://${ports.query}/`)

  const response = await axios.get(`http://localhost:${ports.eventBus}/events`);

  for (let event of response.data) {
    console.log('Processing event: ', event.type);
    handleEvent(event.type, event.data);
  }

});
