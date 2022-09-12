const { createPayment, createPaymentDetails } = require('../../service');
const { toFixedNumber } = require('../../helpers');

const createPaymentController = async (req, res) => {
  try {
    const { totalValue, paymentDate, pacientId, installments } = req.body;
    let paymentType = 'a vista';
    if (installments > 1) paymentType = 'parcela';

    const payment = await createPayment(pacientId, totalValue, paymentType);
    if(payment.message) return res.status(404).json(payment.message);

    const num = totalValue / installments;
    const paymentValue = toFixedNumber(num, 2, 10);
    const paymentInfo = { paymentId: payment.id, paymentValue, paymentDate, installments };

    const paymentDetails = await createPaymentDetails(paymentInfo);

    return res.status(201).json({ payment, paymentDetails });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = createPaymentController;