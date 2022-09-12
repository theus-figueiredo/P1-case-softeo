import React, { useState, useEffect, useCallback, useContext } from 'react';
import Context from '../context/Context';
import axios from 'axios';
import formatedDate from '../helpers/formatedDate';
import ErrorMsg from './ErrorMsg';
import SuccessMsg from './SuccessMsg';

export default function RegistrationIncomeForm(props) {

  const { showError, setShowError, showSuccess, setShowSuccess } = useContext(Context);
  const [installmentAmount] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [newPaymentInfo, setNewPaymentInfo] = useState({
    value: 0,
    installments: 0,
    paymentDate: '',
    pacientId: 0, 
  });

  const verifyRegister = useCallback(() => {
    const { value, installments, paymentDate, pacientId } = newPaymentInfo;
    const one = 1;
    const ten = 10;
    
    if (pacientId >= one && paymentDate.length === ten && value >= 10 && installments >= one) {
      setDisabled(false);
    }else {
      setDisabled(true);
    }

  }, [newPaymentInfo]);

  const handleRegister = async () => {
    try {
      const {value, installments, paymentDate, pacientId} = newPaymentInfo;
      await axios.post('http://localhost:3001/payments', { 
        totalValue: value, 
        installments, 
        paymentDate: formatedDate(paymentDate),
        pacientId,
      });
      
      setSuccessMsg('Recebimento registrado com sucesso');
      setShowSuccess(true);

    } catch (error) {
      if(error.response){
        setErrorMsg(error.response.data);
        setShowError(true);
      }else if (error.request) console.log(error.request);
    } 
  };

  const handleChange = ({ target: { value, id } }) => {
    setNewPaymentInfo({ ...newPaymentInfo, [id]: value});
  };

  useEffect(() => { verifyRegister(); console.log(newPaymentInfo)}, [verifyRegister, newPaymentInfo])

  return (
    <div className='flex-container' style={{"margin": "3% 10% 3%"}}>
      <form>
      <h5 className='h5'>Registrar novo recebimento:</h5>
      {showError && <ErrorMsg message={errorMsg}/>}
      {showSuccess && <SuccessMsg message={successMsg}/>}
      <div className='row'>
        <div className='col'>
          <label htmlFor='value'> Valor</label>
          <input type="number" className='form-control' placeholder='1000.00' id='value'onChange={handleChange}/>
        </div>
        <div className='col'>
          <label htmlFor='installments'>Quantidade de parcelas</label>
          <select className="form-select" id='installments'onChange={handleChange}>
            <option>parcelas</option>
            {installmentAmount.map((value, index) => <option key={index}>{value}</option>)}
          </select>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
        <div className='md-form md-outline input-with-post-icon datepicker' inline="true">
          <label htmlFor='paymentDate'>Data do pagamento</label>
          <input type="date" className='form-control' id="paymentDate" onChange={ handleChange }/>
        </div>
        </div>
        <div className='col'>
          <label htmlFor='pacientId'>Paciente</label>
          <select className="form-select" id='pacientId' onChange={handleChange}>
            <option>Selecione um paciente</option>
            {props.pacients.map((pacient, index) => <option key={index} value={pacient.id}>{`${pacient.name}/ ${pacient.email}`}</option>)}
          </select>
        </div>
      </div>
      <button className="btn btn-dark" type="button" style={{"marginTop": "10px"}} onClick={handleRegister} disabled={disabled}>Cadastrar</button>
    </form>
    </div>
  );
};
