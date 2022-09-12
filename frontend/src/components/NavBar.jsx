import React, { useState } from 'react';

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [buttonClass, setButtonClass] = useState('navbar-toggler collapsed');
  const [ariaExpanded, setAriaExpanded] = useState(false);
  const [divClass, setDivClass] = useState('navbar-collapse collapse');

  const handleHamburguerClickExpand = () => {
    if(!expanded) {
      setButtonClass('navbar-toggler');
      setAriaExpanded(true);
      setDivClass('navbar-collapse collapse show');
      setExpanded(true);
    } else {
      setButtonClass('navbar-toggler collapsed');
      setAriaExpanded(false);
      setDivClass('navbar-collapse collapse');
      setExpanded(false);
    }
  };

  return (
    <nav className='navbar navbar-dark bg-dark' aria-label="First navbar example">
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>Clinica erica</a>
        <button className={buttonClass} type='button' data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded={ariaExpanded} aria-label="Toggle navigation" onClick={handleHamburguerClickExpand}>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className={divClass} id="navbarsExample01">
          <ul className='navbar-nav me-auto mb-2'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current="page" href='/pacientes'>Clientes</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link active' aria-current="page" href='/'>Faturamento</a>
            </li>
            </ul>
        </div>
      </div>
    </nav>
  ); 
};
