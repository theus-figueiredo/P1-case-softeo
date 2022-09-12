import React, { useState } from 'react';
import Context from "./Context";

export default function Provider({ children }) {
  const [incomeInfo, setIncomeInfo] = useState();
  const [totalIncome, setTotalIncome] = useState(0.00);
  const [pacientInfo, setPacientInfo] = useState();
  const [showError, setShowError] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  const context = {
    incomeInfo,
    setIncomeInfo,
    totalIncome,
    setTotalIncome,
    pacientInfo,
    setPacientInfo,
    showError,
    setShowError,
    fetching,
    setFetching,
    showSuccess,
    setShowSuccess,
  };

  return(
    <Context.Provider value={ context } >
    { children }
  </Context.Provider>
  );
};
