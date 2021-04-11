const express = require('express');
const { ports, routes, event } = require('../config.json');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json())

app.get('/posts', (req, res) => {

});

app.post('/events', (req, res) => {

});

app.listen(ports.query, () =>
  console.log(`Listening on http://${ports.query}/`)
);
