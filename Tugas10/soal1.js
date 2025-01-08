import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Efek dijalankan!');
  }, []);

  return (
    <div>
      <p>Anda telah menekan tombol {count} kali.</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
}

export default Counter;