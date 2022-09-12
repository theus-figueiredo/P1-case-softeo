import React, { useState, useContext, useCallback, useEffect } from 'react';
import ErrorMsg from './ErrorMsg';
import SuccessMsg from './SuccessMsg'
import Context from '../context/Context';
import axios from 'axios';

export default function PacientRegisterForm() {

  const { setPacientInfo, pacientInfo, showError, setShowError, showSuccess, setShowSuccess } = useContext(Context);
  const [disabled, setDisabled] = useState(true);
  const [successMsg, setShowSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [newPacientInfo, setNewPacientInfo] = useState({
    name: '',
    lastName: '',
    email: '',
    phoneNumber: 0,
  });

  const verifyRegister = useCallback(() => {
    const { name, lastName, email,  phoneNumber } = newPacientInfo;
    const regexEmail = /^[a-z0-9._]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
    const two = 2
    const eight = 8

    if(regexEmail.test(email) && name.length > two && lastName.length >= two && phoneNumber.length >= eight) {
      setDisabled(false);
    }else {
      setDisabled(true);
    }
  }, [newPacientInfo]);

  const handleChange = ({ target: { value, id } }) => setNewPacientInfo({...newPacientInfo, [id]: value});

  const handleUpdateClick = async () => {
    try {
      const { data } = await axios.post('http://localhost:3001/pacients', newPacientInfo);

      setPacientInfo([ ...pacientInfo, data]);
      setShowSuccess(true);
      setShowSuccessMsg('Paciente cadastrado com sucesso');
    
    } catch (error) {
      if (error.response) {

        setErrorMsg(error.response.data.message);
        setShowError(true);
      } else if (error.request) console.log(error.request);
    }
  };

  useEffect(() => { verifyRegister(); }, [newPacientInfo, verifyRegister]);

  return(
    <div className='flex-container' style={{"margin": "3%"}}>
      <form>
        {showSuccess && <SuccessMsg message={successMsg}/>}
        {showError && <ErrorMsg message={ errorMsg } />}
        <h4 className='h5'> Registrar Novo paciente:</h4>
        <div className='row'>
          <div className='col'>
            <input type="text" className='form-control' placeholder='Nome' id='name'onChange={handleChange}/>
          </div>
          <div className='col'>
            <input type="text" className='form-control' placeholder='Sobrenome'id='lastName'onChange={handleChange}/>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <input type="email" placeholder='Email' className='form-control' id='email'onChange={handleChange}/>
          </div>
          <div className='col'>
            <input type="number" placeholder='Telefone' className='form-control' id='phoneNumber'onChange={handleChange}/>
          </div>
        </div>
        <button className="btn btn-dark" type="button" style={{"marginTop": "10px"}} onClick={handleUpdateClick} disabled={disabled}>Cadastrar</button>
      </form>
    </div>
  );
};
