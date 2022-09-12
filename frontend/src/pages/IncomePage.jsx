import React, { useContext, useState, useEffect } from "react";
import Context from "../context/Context";
import NavBar from "../components/NavBar";
import SearchIncomeForm from "../components/SearchIncome";
import IncomeDetailsTable from "../components/IncomeDetailsTable";
import RegistrationIncomeForm from "../components/RegisterIncomeForm";
import axios from 'axios';

export default function IncomePage() {

  const {incomeInfo, totalIncome} = useContext(Context);
  const [fetching, setFetching] = useState(true);
  const { setPacientInfo, pacientInfo, startDateContext, endDateContext } = useContext(Context)

  const fetchApi = async () => {
    const pacientInfo = await axios.get('http://localhost:3001/pacients');
    return pacientInfo;
  }

  useEffect(() => {
    const populateData = async () => {
      const data = await fetchApi();
      setPacientInfo(data.data);
      await setFetching(false);
    };
    populateData();
  }, [pacientInfo, setPacientInfo]);

  return(
    <body>
      <NavBar />
      <div className="flex-container">
      {!fetching && <RegistrationIncomeForm pacients={pacientInfo}/>}
        <SearchIncomeForm />
        <div className="container">
          <div className="card-deck mb-2 text-center" style={{"margin": "2%"}}>
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Faturamento total no perído</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">R$ {totalIncome}</h1>
              </div>
            </div>
          </div>
        </div>
        { incomeInfo && <IncomeDetailsTable />}
      </div>
    </body>
  );
};
