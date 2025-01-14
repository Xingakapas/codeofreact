import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function HomePage() {
  return <h2>Ini adalah halaman utama</h2>;
}

function ProfilePage() {
  const { userId } = useParams();
  return <h2>Halaman profil pengguna dengan ID: {userId}</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;