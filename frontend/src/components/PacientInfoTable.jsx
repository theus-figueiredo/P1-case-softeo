import React, { useState, useContext } from 'react';
import Context from '../context/Context';

export default function PacientsInfoTable() {

  const { pacientInfo } = useContext(Context);
  const [pacientDataFields] = useState(['Nome', 'Email', 'Telefone']);

  return (
    <div classaName="flex-container" style={{"margin": "5%"}}>
      <h4 className='h4'>Pacientes cadastrados:</h4>
      <table className='table table-bordered'>
        <thead className='thead-dark'>
          <tr>
            {pacientDataFields.map((fields, i) => <th key={i} className="table-active"scope='col'>{fields}</th>)}
          </tr>
        </thead>
        <tbody>
          {pacientInfo.map((pacient, i) => <tr key={i}>
            <td>{pacient.name}</td>
            <td>{pacient.email}</td>
            <td>{pacient.phoneNumber}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  );
}
