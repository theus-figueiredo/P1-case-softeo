const { StatusCodes } = require('http-status-codes');
const Joi = require('joi');

module.exports = (req, res, next) => {
  try {
    const { totalValue, paymentDate, installments, pacientId } = req.body;
    const { error } = Joi.object({
      totalValue: Joi.number().required(),
      paymentDate: Joi.string().required(),
      installments: Joi.number().required(),
      pacientId: Joi.number().required(),
    }).validate({ totalValue, paymentDate, installments, pacientId });

    if (error) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: error.details[0].message });
    };

    next();
  } catch (e) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Erro', error: e.message });
  }
};
