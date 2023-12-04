import React from 'react';
import Box1 from '../../components/logo/Logo.jsx';
import Box2 from '../../components/historical/Historical.jsx';
import Box3 from '../../components/newVehicle/newVehicle.jsx';
import './MainBox.css';

const MainBox = () => {
  return (
    <div className="main-box">
      <Box1 />
      <Box3/>
      <Box2 />
    </div>
  );
};

export default MainBox;
