const { Payments, PaymentDetails, Pacients } = require('../../models');
const { Op } = require('sequelize');
const moment = require('moment');

const getAllPayments = async () => {
  try {
    const payments = await Payments.findAll();
    return payments;
  } catch (error) {
    return error.messsage;
  };
};

const getPaymentsById = async (id) => {
  try {
    const payment = await Payments.findByPk(id);
    return payment;
  } catch (error) {
    return error.message;
  }
};

const getAllPaymentsInTimeFrame = async (startDate, endDate) => {
  try {
    const config = 'DD/MM/YYYY';

    const payments = await PaymentDetails.findAll({
      where: {
        paymentDate: {
          [Op.between]: [moment(startDate, config), moment(endDate, config)]
        }
      },
      attributes: { exclude: ['paymentId'] },
      include: [{
        model: Payments,
        as: 'payment',
        attributes: { exclude: ['pacientId', 'id'] },
        include: [{
          model: Pacients,
          as: 'pacient',
          attributes: { exclude: ['phoneNumber', 'id']}
        }]
      }]
    });

    return payments;

  } catch (e) {
    return e.message;
  }
};

module.exports = {
  getAllPayments,
  getPaymentsById,
  getAllPaymentsInTimeFrame,
};
