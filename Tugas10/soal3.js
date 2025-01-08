import React, { useState, useEffect } from 'react';

function TextLogger() {
  const [text, setText] = useState('');

  useEffect(() => {
    console.log(`Teks berubah menjadi: ${text}`);
  }, [text]);

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
      <button onClick={() => setText('Teks yang diperbarui')}>Update Teks</button>
    </div>
  );
}

export default TextLogger;