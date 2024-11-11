import React from 'react';

// Komponen Greeting
function Greeting({ name, message }) {
  return (
    <div>
      <h1>Halo, {name}!</h1>
      <p>{message}</p>
    </div>
  );
}

// Komponen App
function App() {
  return (
    <div>
      <Greeting name="Alice" message="Welcome to React!" />
    </div>
  );
}

export default App;