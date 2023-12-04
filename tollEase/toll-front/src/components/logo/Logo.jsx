import React from 'react';
import './Logo.css';
import logoImage from '../../assets/bti-preview.png'


export default function Logo(){
  return (
    <div className="box1">
      <img src={logoImage} alt="Logo" />
    </div>
  );
};

