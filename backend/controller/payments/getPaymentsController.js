const { toFixedNumber } = require('../../helpers');
const {
  getAllPayments,
  getPaymentsById,
  getAllPaymentsInTimeFrame,
} = require('../../service');

const getAllPaymentsController = async (_req, res) => {
  try {
    const payments = await getAllPayments();
    return res.status(200).json(payments);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getPaymentsByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await getPaymentsById(id);
    return res.status(200).json(payment);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getIncomeInTimeFrame = async(req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const payments = await getAllPaymentsInTimeFrame(startDate, endDate);
    const totalIncome = payments.reduce((acc, currentValue) => acc + Number(currentValue.paymentValue), 0);
    const formatedIncome = toFixedNumber(totalIncome, 2);

    return res.status(200).json({ total: formatedIncome, payments });

  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = { getAllPaymentsController, getPaymentsByIdController, getIncomeInTimeFrame };
