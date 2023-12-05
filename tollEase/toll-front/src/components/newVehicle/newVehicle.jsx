import React, { useState } from 'react';
import axios from 'axios';
import './newVehicle.css';

export default function NewVehicle() {
  const [plaque, setPlaque] = useState('ABC-1234');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const newPlaque = e.target.value;
    setPlaque(newPlaque);
    setError('');
  };

  const isValidPlaque = (plaque) => {
    const validPlaqueRegex = /^[A-Za-z]{3}-\d{1}[A-Za-z]?\d{2,3}$/;
    return validPlaqueRegex.test(plaque);
  };

  const handleSubmit = async () => {
    const normalizedPlaque = plaque.toUpperCase();
    if (!isValidPlaque(normalizedPlaque)) {
      setError('Placa inválida. Por favor, insira uma placa válida.');
      return;
    }

    try {
      setLoading(true);
      const apiUrl = import.meta.env.VITE_APP_URL;
      const response = await axios.post(`${apiUrl}/`, {
        plaque: normalizedPlaque,
      });
      setError('');
      window.location.reload();
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
        Adicionar nova passagem
      </button>
    </div>
  );
}
