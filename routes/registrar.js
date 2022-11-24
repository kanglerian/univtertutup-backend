let express = require('express');
let router = express.Router();

const { Program, Level, Registrar } = require('../models');

router.get('/', async (req, res) => {
  try {
    const data = await Registrar.findAll({
      include: [
        {model: Level, attributes:['name']},
        {model: Program, attributes:['name']},
      ]
    });
    res.status(200).json(data);
  } catch (error) {
    res.send("can't access");
  }
});

module.exports = router;