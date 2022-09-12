const { PaymentDetails } = require('../../models');
const { installmentDates } = require('../../helpers/dateHelpingFunctions');

const createPaymentDetails = async (paymentInfo) => {
  try {
    const { paymentId, paymentDate, paymentValue, installments } = paymentInfo;
    const paymentDates = installmentDates(paymentDate, installments);

    const newPaymentDetails = await Promise.all(paymentDates.map(async (date, index) => {
      const paymentDetails = await PaymentDetails.create({
        paymentId,
        installments: index + 1 + ' de ' + installments,
        paymentDate: date,
        paymentValue
      });

      return paymentDetails;
    }));

    return newPaymentDetails;

  } catch (error) {
    return error.message;
  }
};

module.exports = createPaymentDetails;
