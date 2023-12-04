import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RefreshProvider from "./contexts/refreshContext";
import React from 'react';
import MainBox from './pages/MainBox/MainBox.jsx';


function App() {
  return (
    <BrowserRouter>
      <RefreshProvider>
        <Routes>
          <Route path="/" element={<MainBox />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </RefreshProvider>
    </BrowserRouter>
  );
};

export default App;
