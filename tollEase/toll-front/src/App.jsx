import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from 'react';
import MainBox from './pages/MainBox/MainBox.jsx';


function App() {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<MainBox />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>

    </BrowserRouter>
  );
};

export default App;
