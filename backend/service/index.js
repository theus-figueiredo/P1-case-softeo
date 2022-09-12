const createPacient = require('./pacients/createPacient');
const { getAllPacients, getPacientById } = require('./pacients/getPacient');
const validateIfPacientExists = require('./pacients/pacientValidation');
const createPayment = require('./payments/createPayment')
const {  getAllPayments, getPaymentsById, getAllPaymentsInTimeFrame } = require('./payments/getPayments');
const createPaymentDetails = require('./payments/createPaymentDetails');
const { validatePaymentValue } = require('./payments/paymentDetailsValidations');



module.exports = {
  createPacient,
  getAllPacients,
  getPacientById,
  validateIfPacientExists,
  createPayment,
  getAllPayments,
  getPaymentsById,
  createPaymentDetails,
  validatePaymentValue,
  getAllPaymentsInTimeFrame,
};
