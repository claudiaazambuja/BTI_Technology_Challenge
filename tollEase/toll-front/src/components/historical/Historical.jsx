import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Historical.css';
import { format } from 'date-fns';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';


export default function Historical(){
  const [vehiclesInfo, setVehiclesInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expandedVehicle, setExpandedVehicle] = useState(null);

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

  useEffect(() => {fetchVehiclesInfo();}, []);

  const handleTogglePassages = (vehicleId) => {
    setExpandedVehicle(expandedVehicle === vehicleId ? null : vehicleId);
  };

  return (
    <div className="box2">
      {loading && <p>Carregando informações...</p>}
      {vehiclesInfo
        .map((vehicle) => ({
          ...vehicle,
          lastPassageDate: new Date(vehicle.passages.slice(-1)[0]?.passage_date || 0),
        }))
        .sort((a, b) => b.lastPassageDate - a.lastPassageDate)
        .map((vehicle) => (
          <div key={vehicle.vehicle_id} className="vehicle-section">
            <div className="vehicle-header">
              <h2>Informações do Veículo {vehicle.vehicle_id}</h2>
              <button className="toggle-button" onClick={() => handleTogglePassages(vehicle.vehicle_id)}>
                {expandedVehicle === vehicle.vehicle_id ? <FiChevronDown /> : <FiChevronRight />}
              </button>
              <span className="last-passage">
                Última Passagem: {format(new Date(vehicle.passages.slice(-1)[0]?.passage_date), 'dd/MM/yyyy HH:mm:ss')}
              </span>
            </div>
            {expandedVehicle === vehicle.vehicle_id && (
              <ul className="passages-list">
                {vehicle.passages
                  .map((passage, index) => ({
                    ...passage,
                    passage_date: new Date(passage.passage_date)
                  })) // Converte as datas para objetos Date
                  .sort((a, b) => b.passage_date - a.passage_date) // Ordena as passagens da data mais nova para a mais antiga
                  .slice(0, 20)
                  .map((passage, index) => (
                    <li key={index}>
                      <div className="passage-info">
                        <span>Data da Passagem: {format(passage.passage_date, 'dd/MM/yyyy HH:mm:ss')}</span>
                        <span>Valor Pago: R$ {passage.passage_fee.toFixed(2)}</span>
                      </div>
                      <hr /> {/* Linha separadora */}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        ))}
    </div>
  );
};

