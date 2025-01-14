
import React from 'react';
import { BrowserRouter, Routes, Route, Link, createBrowserRouter } from 'react-router-dom';

function HomePage() {
  return <h2>Ini adalah halaman utama</h2>;
}

function AboutPage() {
  return <h2>Ini adalah halaman about</h2>;
}

function NotFoundPage() {
  return <h2>Halaman tidak ditemukan</h2>;
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
  ]);

  return (
    <BrowserRouter router={router}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;