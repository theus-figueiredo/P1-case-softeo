const { getAllPacients, getPacientById } = require('../../service');

const getAllPacientsController = async (_req, res) => {
  try {
    const pacients = await getAllPacients();

    return res.status(200).json(pacients);
  } catch (error) {
    return error.message;
  }
};

const getPacientByIdController = async (req, res) => {
  try {
    const { id } = req.params;

    const pacient = await getPacientById(id);

    return res.status(200).json(pacient);
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getAllPacientsController,
  getPacientByIdController,
};
