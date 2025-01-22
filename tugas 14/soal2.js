import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function DetailProducts() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} />
          <p>Harga: Rp {product.price}</p>
          <p>Deskripsi: {product.description}</p>
          <button onClick={() => navigate(-1)}>Kembali</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DetailProducts;