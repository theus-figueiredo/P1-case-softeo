import React, { useContext, useState } from 'react';
import Context from '../context/Context';
import moment from 'moment';

export default function IncomeDetailsTable() {

  const { incomeInfo } = useContext(Context);
  const [incomeDateFields] = useState(['Data do pagamento', 'Valor', 'Tipo', 'Cliente']);

  return (
    <div className="flex-container"style={{"marginLeft": "5%", "marginRight": "5%"}}>
      <h5 className='h5'>Detalhes:</h5>
      <table className="table table-bordered">
        <thead className='thead-dark'>
          <tr>
            {incomeDateFields.map((field, i) => <th className="table-active"scope='col' key={i}>{field}</th>)}
          </tr>
        </thead>
        <tbody>
          {incomeInfo.payments.map((pay, i) => <tr key={i}>
            <td>{moment(pay.paymentDate).format('DD/MM/YYYY')}</td>
            <td>{pay.paymentValue}</td>
            <td>{`${pay.payment.paymentType} ${pay.installments}`}</td>
            <td>{pay.payment.pacient.name}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  );
};
