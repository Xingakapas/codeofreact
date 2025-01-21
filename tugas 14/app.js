import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookList from './BookList';
import BookDetail from './BookDetail';  

function App() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="" element={<BookDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;   