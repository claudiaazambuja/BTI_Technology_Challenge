import React from 'react';
import './Logo.css';
import logoImage from '../../assets/bti-preview.png'


const Box1 = () => {
  return (
    <div className="box1">
      <img src={logoImage} alt="Logo" />
    </div>
  );
};

export default Box1;