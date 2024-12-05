import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function ProductCard({ name, price, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Rp {price}</p>
      <button>Beli</button>
    </div>
  );
}

function App() {
  const products = [
    { name: 'Produk A', price: 100, image: 'https://via.placeholder.com/150' },
    { name: 'Produk B', price: 150, image: 'https://via.placeholder.com/150' },
    { name: 'Produk C', price: 200, image: 'https://via.placeholder.com/150' },
    { name: 'Produk D', price: 120, image: 'https://via.placeholder.com/150' },
    { name: 'Produk E', price: 180, image: 'https://via.placeholder.com/150' },
    { name: 'Produk F', price: 90, image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div>
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);