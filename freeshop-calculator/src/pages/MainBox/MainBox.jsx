import React from 'react';
import './MainBox.css';
import Header from '../../components/Header/Index.jsx';
import Calculator from '../../components/Calculator/Calculator.jsx';
import TotalPayment from '../../components/Footer/TotalPayment.jsx';

export default function MainBox(){
  return (
    <div className="main-box">
      <Header />
      <Calculator/>
      <TotalPayment />
    </div>
  );
};
