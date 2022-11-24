let express = require('express');
let router = express.Router();

const { Level } = require('../models');

router.get('/', async (req, res) => {
  try {
    const data = await Level.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.send("can't access");
  }
});

module.exports = router;
