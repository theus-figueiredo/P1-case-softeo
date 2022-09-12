const { StatusCodes } = require('http-status-codes');
const Joi = require('joi');

module.exports = (req, res, next) => {
  try {
    const { name, lastName, email, phoneNumber } = req.body;
    const { error } = Joi.object({
      name: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().required(),
      phoneNumber: Joi.number().required(),
    }).validate({ name, lastName, email, phoneNumber });

    if (error) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: error.details[0].message
      });
    };

    next();
  } catch (e) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
      { message: 'Erro', error: e.message}
    );
  }
};

