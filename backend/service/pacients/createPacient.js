const { Pacients } = require('../../models');

const createPacient = async (name, email, phoneNumber) => {
  try {
    const pacient = await Pacients.create({ name, email, phoneNumber });
    return pacient;
  } catch (error) {
    return error.message;
  }
};

module.exports = createPacient;
