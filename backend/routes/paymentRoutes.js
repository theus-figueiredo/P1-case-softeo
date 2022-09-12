const router = require('express').Router();
const { paymentsValidationMid } = require('../middlewares');
const { 
  createPaymentController,
  getAllPaymentsController,
  getPaymentsByIdController,
  getIncomeInTimeFrame,
} = require('../controller');

router.post('/', paymentsValidationMid, createPaymentController);
router.get('/income', getIncomeInTimeFrame)
router.get('/', getAllPaymentsController);
router.get('/:id', getPaymentsByIdController);

module.exports = router;
