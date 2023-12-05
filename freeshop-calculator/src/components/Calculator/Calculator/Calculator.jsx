import React from 'react';

export default function Calculator({ onNumberClick, onOperation, onEqual, onClear, result, expression, onTransferTotal }) {
  const handleEqualClick = () => {
    onEqual();
    onTransferTotal();
  };

  return (
    <div className="calculator">
      <h3>Calculadora:</h3>
      <input type="text" value={expression} readOnly />
      <div>
        <button onClick={() => onNumberClick(1)}>1</button>
        <button onClick={() => onNumberClick(2)}>2</button>
        <button onClick={() => onNumberClick(3)}>3</button>
      </div>
      <div>
        <button onClick={() => onNumberClick(4)}>4</button>
        <button onClick={() => onNumberClick(5)}>5</button>
        <button onClick={() => onNumberClick(6)}>6</button>
      </div>
      <div>
        <button onClick={() => onNumberClick(7)}>7</button>
        <button onClick={() => onNumberClick(8)}>8</button>
        <button onClick={() => onNumberClick(9)}>9</button>
      </div>
      <button onClick={() => onNumberClick(0)}>0</button>
      <button onClick={() => onOperation('+')}>+</button>
      <button onClick={() => onOperation('-')}>-</button>
      <button onClick={() => onOperation('*')}>*</button>
      <button onClick={handleEqualClick}>=</button>
      <button onClick={onClear}>Limpar</button>
      <div>
        <h4>Resultado:</h4>
        <p>{typeof result === 'number' ? result.toFixed(2) : result}</p>
      </div>
    </div>
  );
}
