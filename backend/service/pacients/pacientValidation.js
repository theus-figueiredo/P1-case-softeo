const { Pacients } = require('../../models');

const validateIfPacientExists = async (email, phoneNumber) => {
  try {
    const pacientEmail = await Pacients.findOne({ where: { email } });
    const pacientPhoneNumber = await Pacients.findOne({ where: { phoneNumber } });

    if (pacientEmail || pacientPhoneNumber) {
      return { message: 'Paciente já cadastrado' };
    }
    return false;

  } catch (error) {
    return error.message;
  }
};

module.exports = validateIfPacientExists;
