// ... kode komponen Login.js (seperti yang sudah kita buat sebelumnya)

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Akses ditolak: Silakan login terlebih dahulu');
        return;
      }

      try {
        const response = await axios.get('/api/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
      } catch (error) {
        setError('Token tidak valid, silakan login ulang');
        localStorage.removeItem('token');
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {products.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama Produk</th>
              <th>Harga</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>Rp {product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}