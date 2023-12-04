import React from 'react';
import Box1 from '../../components/logo/Logo.jsx';
import Box2 from '../../components/historical/Historical.jsx';
import './MainBox.css';

const MainBox = () => {
  return (
    <div className="main-box">
      <Box1 />
      <Box2 />
    </div>
  );
};

export default MainBox;
