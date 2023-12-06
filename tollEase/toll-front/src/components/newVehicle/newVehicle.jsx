import React, { useState } from 'react';
import axios from 'axios';
import './newVehicle.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function NewVehicle() {
  const [plate, setPlate] = useState('AAA-1E34');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const newPlate = e.target.value;
    setPlate(newPlate);
    setError('');
  };

  const isValidPlate = (plate) => {
    const validPlateRegex = /^[A-Z]{3}-\d{1}[A-Z]?\d{2,3}$/;
    return validPlateRegex.test(plate);
  };

  const handleAddPassage = async () => {
    const normalizedPlate = plate.toUpperCase();
    if (!isValidPlate(normalizedPlate)) {
      setError('Placa inválida. Por favor, insira uma placa válida.');
      return;
    }
    try {
      setLoading(true);
      const apiUrl = import.meta.env.VITE_APP_URL;
      console.log(plate)
      const response = await axios.post(`${apiUrl}/`, {
        plate: normalizedPlate,
      });
      const newOperationId = response.data.id;
      localStorage.setItem('id', newOperationId);
      setError('');
      toast.success('Passagem adicionada com sucesso!', {
        autoClose: 4000,
        onClose: () => {
          setTimeout(() => {
            window.location.reload();
          }, 4000); 
        },
      });
    } catch (error) {
      console.error('Erro ao enviar a requisição:', error.message);
      setError('Erro ao enviar a requisição. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdatePassage = async () => {
    const storedId = localStorage.getItem('id');
    if (!storedId) {
      setError('Não há uma última passagem para atualizar.');
      return;
    }
    try {
      setLoading(true);
      const normalizedPlate = plate.toUpperCase();
      const apiUrl = import.meta.env.VITE_APP_URL;

      confirmAlert({
        title: 'Confirmação',
        message: 'A última passagem será excluída, e a nova será inserida no lugar e atualizações serão feitas. Deseja continuar?',
        buttons: [
          {
            label: 'Sim',
            onClick: async () => {
              await axios.put(`${apiUrl}/`, {
                id: storedId,
                plate: normalizedPlate,
              });

              setError('');
              toast.success('Passagem atualizada com sucesso!', {
                autoClose: 3000, 
                onClose: () => {
                  setTimeout(() => {
                    window.location.reload();
                  }, 4000); 
                },
              });
            },
          },
          {
            label: 'Não',
            onClick: () => {
            },
          },
        ],
      });
    } catch (error) {
      console.error('Erro ao enviar a requisição:', error.message);
      setError('Erro ao enviar a requisição. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="box3">
      <label htmlFor="plateInput">Placa:</label>
      <input
        type="text"
        id="plateInput"
        value={plate}
        onChange={handleInputChange}
        disabled={loading}
      />
      {error && <div className="error">{error}</div>}
      <div className="button-container">
        <ToastContainer />
        <button onClick={handleAddPassage} disabled={loading} className="add-button">
          Adicionar nova passagem
        </button>
        <button onClick={handleUpdatePassage} disabled={loading} className="update-button">
          Atualizar
        </button>
      </div>
    </div>
  );
}
