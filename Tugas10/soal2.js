import React, { useState, useEffect } from 'react';

function CountLogger() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count berubah menjadi: ${count}`);
  }, [count]); // dependency array berisi count

  return (
    <div>
      <p>Angka: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
}

export default CountLogger;