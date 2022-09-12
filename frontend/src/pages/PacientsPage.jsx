import React, { useEffect, useState, useContext } from 'react';
import NavBar from "../components/NavBar";
import PacientRegisterForm from '../components/PacientRegisterForm';
import PacientsInfoTable from '../components/PacientInfoTable';
import axios from 'axios';
import Context from '../context/Context';

export default function PacientsPage() {

  const [fetching, setFetching] = useState(true);
  const { setPacientInfo, pacientInfo } = useContext(Context)

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

  return (
    <div>
      <NavBar />
      <PacientRegisterForm />
      {!fetching && <PacientsInfoTable />}
    </div>
  );
}