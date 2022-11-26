let express = require('express');
let router = express.Router();
const { Program, Level, Registrar } = require('../models');
const { validationResult, body } = require('express-validator');

const checkSchema = [
  body('fullName').notEmpty(),
  body('birthPlace').notEmpty(),
  body('birthday').isDate().notEmpty(),
  body('motherName').notEmpty(),
  body('nationality').notEmpty(),
  body('nik').notEmpty().isDecimal(),
  body('typeProgram').notEmpty().isBoolean(),
  body('idLevel').notEmpty().isDecimal(),
  body('idProgram').notEmpty().isDecimal(),
  body('handphone').notEmpty().isMobilePhone(),
  body('email').notEmpty().isEmail(),
  body('password').notEmpty().isLength({min: 6})
]

router.get('/', async (req, res) => {
  try {
    const data = await Registrar.findAll({
      include: [
        { model: Level, attributes: ['name'] },
        { model: Program, attributes: ['name'] },
      ]
    });
    res.status(200).json(data);
  } catch (error) {
    res.json({
      message: error
    });
  }
});

router.post('/', checkSchema,
[
  body('confirmPassword').custom((val, { req }) => {
    if (val !== req.body.password) {
      return console.log('password tidak sama');
    }
    return true;
  })
], async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()});
    }
    await Registrar.create(req.body);
    res.status(200).json({
      message: 'data telah ditambahkan.'
    });
  } catch (error) {
    res.json({
      message: error
    });
  }
});

router.patch('/:id', checkSchema, async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()});
    }
    await Registrar.update(req.body, {
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
    }); 
  }
});

router.delete('/', async (req, res) => {
  try {
    await Registrar.destroy({
      where: {
        id: req.body.id
      }
    })
    res.status(200).json({
      message: 'data berhasil dihapus.'
    })
  } catch (error) {
    res.json({
      message: error
    });
  }
});

module.exports = router;
