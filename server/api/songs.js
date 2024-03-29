const router = require('express').Router();
const Song = require('../db/models/Song');

router.get('/', (req, res, next) => {
  Song.findAll()
    .then(songStorage => {
      res.json(songStorage);
    })
    .catch(err => {
      console.log(err);
    });
});

router.post('/', async (req, res, next) => {
  try {
    // TODO - The body is forwarded from an IPFS API response by the seller app. Change the seller app to send a more nicely formatted body.
    const newSong = await Song.create({hash: req.body[0].hash});
    res.json(newSong);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
