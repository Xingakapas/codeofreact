import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

function DashboardPage() {
  return (
    <div>
      <h1>Halaman Dashboard Utama</h1>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dashboard/settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function SettingsPage() {
  return <h2>Halaman Settings</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;