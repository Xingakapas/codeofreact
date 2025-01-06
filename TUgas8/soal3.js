import React, { useState } from 'react';

function SimpleCalculator() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const handleNumber1Change = (event) => {
    setNumber1(parseInt(event.target.value));
  };

  const handleNumber2Change = (event) => {
    setNumber2(parseInt(event.target.value));
  };

  const handleAdd = () => {
    setResult(number1 + number2);
  };

  const handleSubtract = () => {
    setResult(number1 - number2);
  };

  const handleMultiply = () => {
    setResult(number1 * number2);
  };

  const handleDivide = () => {
    if (number2 === 0) {
      setResult('Tidak dapat dibagi dengan nol');
    } else {
      setResult(number1 / number2);
    }
  };

  return (
    <div>
      <input type="number" value={number1} onChange={handleNumber1Change} />
      <input type="number" value={number2} onChange={handleNumber2Change} />
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>
      <button onClick={handleMultiply}>*</button>
      <button onClick={handleDivide}>/</button>
      <p>Hasil: {result}</p>
    </div>
  );
}

export default SimpleCalculator;      