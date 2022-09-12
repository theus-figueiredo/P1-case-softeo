const createPacientController = require('./pacients/createPacientController');
const { getAllPacientsController, getPacientByIdController } = require('./pacients/getPacientController');
const  createPaymentController  = require('./payments/createPaymentController');
const { getAllPaymentsController, getPaymentsByIdController, getIncomeInTimeFrame } = require('./payments/getPaymentsController');

module.exports = {
  createPacientController,
  getAllPacientsController,
  getPacientByIdController,
  createPaymentController,
  getAllPaymentsController,
  getPaymentsByIdController,
  getIncomeInTimeFrame,
};
