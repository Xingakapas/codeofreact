import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <p>Nilai Counter: {count}</p>
      <button onClick={handleIncrement}>Tambah</button>
      <button onClick={handleDecrement}>Kurangi</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;          