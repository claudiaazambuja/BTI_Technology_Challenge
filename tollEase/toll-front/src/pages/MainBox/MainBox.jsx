import React from 'react';
import './MainBox.css';
import Historical from '../../components/historical/Historical.jsx';
import NewVehicle from '../../components/newVehicle/newVehicle.jsx';
import Logo from '../../components/logo/Logo.jsx';

export default function MainBox(){
  return (
    <div className="main-box">
      <Logo />
      <NewVehicle/>
      <Historical />
    </div>
  );
};
