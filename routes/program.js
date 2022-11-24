let express = require('express');
let router = express.Router();

const { Program, Level } = require('../models');

router.get('/', async (req, res) => {
  try {
    const data = await Program.findAll({
      attributes: ['id','idLevel','name'],
      include: [
        {model: Level, attributes:['name']}
      ]
    });
    res.status(200).json(data);
  } catch (error) {
    res.send("can't access");
  }
});

router.post('/', async (req, res) => {
  try {
    await Program.create(req.body);
    res.status(200).send('Data ditambahkan');
  } catch (error) {
    res.send("can't access");
  }
});

module.exports = router;
