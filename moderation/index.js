const express = require('express');
const app = express();
const { ports, event, commentStatus } = require('../config.json');
const axios = require('axios');

app.use(express.json());

app.post('/events', async (req, res) => {

  const { type, data } = req.body;

  if (type === event.commentCreated) {

    const banned = ['orange'];

    let check = banned.some((word) => (
      data.content.includes(word))
    );

    const status = check ?
      commentStatus.rejected :
      commentStatus.approved

    await axios.post(`http://localhost:${ports.eventBus}/events`, {
      type: event.commentModerated,
      data: {
        id: data.id,
        postId: data.postId,
        content: data.content,
        status
      }
    });
  }

});

app.listen(ports.moderation, () =>
  console.log(`Listening on http://${ports.moderation}/`)
);
