import React, { useState } from 'react';
import axios from 'axios';
import './newVehicle.css';

const Box3 = () => {
  const [plaque, setPlaque] = useState('ABC-1234');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const newPlaque = e.target.value;
    setPlaque(newPlaque);
    setError('');
  };

  const isPlaqueValid = (plaque) => {
    const validPlaqueRegex = /^[A-Z]{3}-\d{4}$/;
    return validPlaqueRegex.test(plaque.toUpperCase());
  };
  

  const handleSubmit = async () => {
    if (!isPlaqueValid(plaque)) {
      setError('Placa inválida. Por favor, insira uma placa válida.');
      return;
    }

    try {
      setLoading(true);

  
      const apiUrl = import.meta.env.VITE_APP_URL;
      const response = await axios.post(`${apiUrl}/`, {
        plaque
    });
     

      setError('');
    } catch (error) {
      console.error('Erro ao enviar a requisição:', error.message);
      setError('Erro ao enviar a requisição. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="box3">
      <label htmlFor="plaqueInput">Placa:</label>
      <input
        type="text"
        id="plaqueInput"
        value={plaque}
        onChange={handleInputChange}
        disabled={loading}
      />
      {error && <div className="error">{error}</div>}
      <button onClick={handleSubmit} disabled={loading}>
        Enviar Requisição
      </button>
    </div>
  );
};

export default Box3;
