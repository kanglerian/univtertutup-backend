let express = require('express');
let router = express.Router();
const { Level } = require('../models');
const { validationResult, body } = require('express-validator');

const checkSchema = [
  body('name').notEmpty()
]

router.get('/', async (req, res) => {
  try {
    const data = await Level.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.send("can't access");
  }
});

router.post('/', checkSchema, async (req, res) => {
  try {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array()});
    }
    await Level.create(req.body);
    res.status(200).json({
      message: 'data telah ditambahkan.'
    });
  } catch (error) {
    res.json({
      message: error
    });
  }
});

router.patch('/:id', checkSchema, async(req, res) => {
  try {
    await Level.update(req.body,{
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({
      message: 'data telah diupdate.'
    });    
  } catch (error) {
    res.json({
      message: error
    })
  }
});

router.delete('/', async(req, res) => {
  try {
    await Level.destroy({
      where: {
        id: req.body.id
      }
    });
    res.status(200).json({
      message: 'data berhasil dihapus.'
    });
  } catch (error) {
    res.json({
      message: error
    })
  }
});

module.exports = router;
