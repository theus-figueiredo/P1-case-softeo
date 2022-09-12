const router = require('express').Router();
const { pacientsValidationMid } = require('../middlewares')
const { createPacientController,
  getAllPacientsController,
  getPacientByIdController 
} = require('../controller');

router.post('/', pacientsValidationMid, createPacientController);
router.get('/', getAllPacientsController);
router.get('/:id', getPacientByIdController);

module.exports = router;
