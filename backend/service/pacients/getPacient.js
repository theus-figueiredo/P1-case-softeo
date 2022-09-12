const { Pacients } = require('../../models');

const getAllPacients = async () => {
  try {
    const pacients = await Pacients.findAll();
    return pacients;
  } catch (error) {
    return error.message;
  }
};

const getPacientById = async (id) => {
  try {
    const pacient = await Pacients.findByPk(id);
    return pacient;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getAllPacients,
  getPacientById,
};
