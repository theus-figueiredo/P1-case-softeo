import React, { useState, useContext, useCallback, useEffect } from 'react';
import  Context from '../context/Context';
import axios from 'axios';
import formatedDate from '../helpers/formatedDate';

export default function SearchIncomeForm() {

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [disabled, setDisabled] = useState(true);
  const { setIncomeInfo, setTotalIncome } = useContext(Context);

  const buttonDisableCheck = useCallback(() => {
    const ten = 10;

    if(startDate.length === ten && endDate.length === ten) setDisabled(false);
    else setDisabled(true);
  }, [setDisabled, endDate, startDate]);


  useEffect(() => {buttonDisableCheck();}, [buttonDisableCheck, startDate, endDate]);

  const handleStartDateChange = ({ target: { value } }) => {
    const date = formatedDate(value);
    setStartDate(date);
  };

  const handleEndDateChange = ({ target: { value }}) => {
    const date = formatedDate(value);
    setEndDate(date);
  };


  const getIncomeInTimeFrame = async () => {
    const { data } = await axios.get(`http://localhost:3001/payments/income?startDate=${startDate}&endDate=${endDate}`);
    setIncomeInfo(data);
    setTotalIncome(data.total);
    console.log(data);
  };

  return (
    <div className="flex-container" style={{"marginLeft": "18%", "marginRight": "18%"}}>
      <h5 className='h5'>Faturamento por período:</h5>
      <form>
        <div className='row'>
          <div className='col'>
            <label htmlFor='startDate'>Data inicial</label>
            <input type="date" className='form-control' id="startDate" onChange={ handleStartDateChange }/>
          </div>
          <div className='col'>
          <label htmlFor='endDate'>Data final</label>
          <input type="date" className='form-control' id="endDate" onChange={ handleEndDateChange }/>
          </div>
        </div>
          <button type="button" className="btn btn-dark btn-sm" onClick={getIncomeInTimeFrame} style={{"marginTop": "10px"}} disabled={disabled}>Buscar</button>
      </form>
    </div>
  );
};
