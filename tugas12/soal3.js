import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function HomePage() {
  return <h2>Ini adalah halaman utama</h2>;
}

function AboutPage() {
  return <h2>Ini adalah halaman about</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;