import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Historical.css';
import { format } from 'date-fns';

const Box2 = () => {
  const [vehiclesInfo, setVehiclesInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPassages, setShowPassages] = useState(false);

  const fetchVehiclesInfo = async () => {
    try {
      setLoading(true);

      const apiUrl = import.meta.env.VITE_APP_URL;
      const response = await axios.get(`${apiUrl}/`);

      setVehiclesInfo(response.data.rows || []);
    } catch (error) {
      console.error('Erro ao obter informações dos veículos:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVehiclesInfo();
  }, []);

  const handleTogglePassages = () => {
    setShowPassages(!showPassages);
  };

  return (
    <div className="box2">
      {loading && <p>Carregando informações...</p>}
      {vehiclesInfo.map((vehicle) => (
        <div key={vehicle.vehicle_id} className="vehicle-section">
          <h2>Informações do Veículo {vehicle.vehicle_id}</h2>
          <button onClick={handleTogglePassages}>
            {showPassages ? 'Ocultar Passagens' : 'Mostrar Passagens'}
          </button>
          {showPassages && (
            <ul className="passages-list">
              {vehicle.passages.slice(0, 20).map((passage, index) => (
                <li key={index}>
                  <div className="passage-info">
                    <span>Data da Passagem: {format(new Date(passage.passage_date), 'dd/MM/yyyy HH:mm:ss')}</span>
                    <span>Valor Pago: R$ {passage.passage_fee.toFixed(2)}</span>
                  </div>
                  <hr /> {/* Linha separadora */}
                </li>
              ))}
            </ul>
          )}
          <button onClick={fetchVehiclesInfo}>Atualizar Informações</button>
        </div>
      ))}
    </div>
  );
};

export default Box2;