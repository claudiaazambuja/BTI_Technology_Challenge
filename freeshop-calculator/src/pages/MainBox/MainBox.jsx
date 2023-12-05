import React from 'react';
import './MainBox.css';
import Header from '../../components/Header/Index.jsx';
import TotalPayment from '../../components/Footer/TotalPayment.jsx';
import IndexCalculator from '../../components/Calculator/index.calculator.jsx';

export default function MainBox(){
  return (
    <div className="main-box">
      <Header />
      <IndexCalculator/>
      <TotalPayment />
    </div>
  );
};
