const router = require('express').Router();
const util = require('util');
const store = require('../db/store')


//we need an API endpoint of /api/notes to handle a POST request into our "db" (json file)
router.post('/notes', (req, res) => {
    store
        .addNote(req.body)
        .then(note => res.json(note))
        .catch(err => console.log(err))

})
//we need an API endpoint of /api/notes to handle a GET request to read out all the notes from our "db" (json file)
router.get('/notes', (req, res) => {
    store
      .getNotes()
      .then((notes) => {
        return res.json(notes);
      })
      .catch((err) => res.status(500).json(err));
  });
  module.exports = router;