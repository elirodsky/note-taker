const express = require('express');
const api = require('./api/api');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);

//HTML Routes:
const path = require('path');
const router = require('express').Router();
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/notes.html'));
});
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.use('/', router);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
