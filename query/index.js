const express = require('express');
const { ports, routes, event } = require('../config.json');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json())

const posts = {}

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {

  const { type, data } = req.body;

  // Post Created Event
  if(type === event.postCreated){

    const { id, title } = data;

    posts[id] = {
      id,
      title,
      comments: []
    };

  }

  // Comment Created Event
  if(type === event.commentCreated){
    const { id, content, postId } = data;
    const post = posts[postId];

    post.comments.push({
      id, content
    });

  }

  console.log(posts);

  res.send({});

});

app.listen(ports.query, () =>
  console.log(`Listening on http://${ports.query}/`)
);
