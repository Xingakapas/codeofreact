import { useState, useEffect } from 'react';

function useTheme() {
  const [theme, setTheme] = useState('light'); // Nilai awal tema adalah terang

  useEffect(() => {
    console.log(`Tema saat ini: ${theme}`);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return [theme, toggleTheme];
}

export default useTheme;  