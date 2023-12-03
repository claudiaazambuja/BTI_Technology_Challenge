import React from 'react';
import './ErrorPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const ErrorPage = () => {
  return (
    <div className="error-container">
      <h2 className="error-message">Página de Erro</h2>
      {/* Use o ícone de engrenagem com a classe gear-icon */}
      <FontAwesomeIcon icon={faCog} className="gear-icon" />
      <p>Desculpe, a página que você está procurando não foi encontrada.</p>
    </div>
  );
};

export default ErrorPage;
