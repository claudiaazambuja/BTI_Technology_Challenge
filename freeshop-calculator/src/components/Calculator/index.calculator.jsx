import React, { useState, useRef } from 'react';
import Input from './Input/Input.jsx';
import Calculator from './Calculator/Calculator.jsx';

export default function IndexCalculator() {
  const [total, setTotal] = useState(0);
  const [paid, setPaid] = useState(0);
  const [currentOperation, setCurrentOperation] = useState('');
  const [result, setResult] = useState(0);
  const [expression, setExpression] = useState('');
  const [isTotalInputOpen, setIsTotalInputOpen] = useState(true);
  const [isPaidInputOpen, setIsPaidInputOpen] = useState(false);

  const paidInputRef = useRef(null);

  const handleTotalChange = (value) => {
    setTotal(parseFloat(value) || 0);
  };

  const handlePaidChange = (value) => {
    setPaid(parseFloat(value) || 0);
  };

  const handleTotalKeyDown = (event) => {
    if (event.key === 'Enter') {
      setIsTotalInputOpen(false);
      setIsPaidInputOpen(true);
      paidInputRef.current && paidInputRef.current.focus();
    }
  };

  const handlePaidKeyDown = (event) => {
    // Não verificamos mais 'Enter' aqui para permitir a mudança imediata quando um número for digitado
    setIsPaidInputOpen(false);

    // Realizar a subtração e verificar se o dinheiro é suficiente
    const remainingMoney = paid - total;
    const isEnoughMoney = remainingMoney >= 0;

    if (isEnoughMoney) {
      console.log('Dinheiro é suficiente. Troco:', remainingMoney.toFixed(2));
    } else {
      console.log('Dinheiro insuficiente. Faltam:', Math.abs(remainingMoney).toFixed(2));
    }
  };

  const handleNumberClick = (number) => {
    setExpression((prevExpression) => prevExpression + number);
  };

  const handleOperation = (operator) => {
    setExpression((prevExpression) => prevExpression + operator);
    setCurrentOperation(operator);
  };

  const handleEqual = () => {
    try {
      const evalResult = eval(expression);
      setResult(evalResult);
      setTotal(evalResult); // Transferir o resultado para o Gasto Total
      setExpression(evalResult.toString());
      setIsTotalInputOpen(false);
      setIsPaidInputOpen(true);
      paidInputRef.current && paidInputRef.current.focus();
    } catch (error) {
      setResult('Erro');
      setExpression('');
    }
  
    // Se o segundo input estiver aberto, realizar a subtração e exibir os resultados
    if (!isTotalInputOpen && isPaidInputOpen) {
      setIsPaidInputOpen(false);
  
      // Realizar a subtração e verificar se o dinheiro é suficiente
      const remainingMoney = paid - total;
      const isEnoughMoney = remainingMoney >= 0;
  
      if (isEnoughMoney) {
        console.log('Gasto Total:', total.toFixed(2));
        console.log('Dinheiro do Cliente:', paid.toFixed(2));
        console.log('Troco:', remainingMoney.toFixed(2));
      } else {
        console.log('Dinheiro insuficiente. Faltam:', Math.abs(remainingMoney).toFixed(2));
      }
    }
  };

  const handleClear = () => {
    setTotal(0);
    setPaid(0);
    setCurrentOperation('');
    setResult(0);
    setExpression('');
    setIsTotalInputOpen(true);
    setIsPaidInputOpen(false);
  };

  return (
    <div>
      <Input
        label="Gasto Total"
        value={total}
        onChange={(e) => handleTotalChange(e.target.value)}
        onKeyDown={handleTotalKeyDown}
        isOpen={isTotalInputOpen}
      />
      <Input
        label="Dinheiro do Cliente"
        value={paid}
        onChange={(e) => handlePaidChange(e.target.value)}
        onKeyDown={handlePaidKeyDown}
        isOpen={isPaidInputOpen}
        ref={paidInputRef}
      />
      <Calculator
        onNumberClick={handleNumberClick}
        onOperation={handleOperation}
        onEqual={handleEqual}
        onClear={handleClear}
        result={result}
        expression={expression}
      />
    </div>
  );
}