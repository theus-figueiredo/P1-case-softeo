const { Payments } = require('../../models');
const { getPacientById } = require('../pacients/getPacient');

const createPayment = async (pacientId, totalValue, paymentType) => {
  try {
    const pacientExists = await getPacientById(pacientId);
    if (!pacientExists) return { message: 'Paciente não existe' };

    const payment = await Payments.create({ pacientId, totalValue, paymentType });
    return payment;
  } catch (error) {
    return error.message;
  }
};

module.exports = createPayment;
