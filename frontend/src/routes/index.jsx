import React from 'react';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import IncomePage from '../pages/IncomePage';
import PacientsPage from '../pages/PacientsPage';

export default function AppRoutes() {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <IncomePage /> }/>
        <Route path="/pacientes" element={<PacientsPage />}/>
      </Routes>
    </BrowserRouter>
  )
};
