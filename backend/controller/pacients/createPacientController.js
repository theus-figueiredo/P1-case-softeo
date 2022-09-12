const { createPacient, validateIfPacientExists } = require('../../service');


const createPacientController = async (req, res) => {
  try {
    const { name, lastName, email, phoneNumber } = req.body;

    const pacientExists = await validateIfPacientExists(email, phoneNumber);
    console.log(pacientExists);
  
    console.log(pacientExists);
    if (pacientExists) {
      return res.status(409).json({ message: pacientExists.message });
    };

    const fullName = `${name} ${lastName}`
  
    const pacient = await createPacient(fullName, email, phoneNumber);
  
    return res.status(201).json(pacient);
  } catch (error) {
    return error.message;
  }
};

module.exports = createPacientController;
