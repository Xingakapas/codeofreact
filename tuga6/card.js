import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function ProductCard({ name, price, description, image, buttonText }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <p>{description}</p>
      <button>{buttonText}</button>
    </div>
  );
}

function ProductList() {
  const [products, setProducts] = useState([
    {
      name: 'Yonex Astrox 99',
      price: 180.00,
      description: 'A racket with Rotational Generator System technology for maximum power and improved control.',
      image: 'https://www.google.com/imgres?q=gambar%20raket%20badminton&imgurl=https%3A%2F%2Fbadmintonclick.com.au%2Fcdn%2Fshop%2Ffiles%2Fbladex700-1_e516ff67-98b2-44ab-80ec-138df895ee96_1024x.png%3Fv%3D1684745301&imgrefurl=https%3A%2F%2Fid.badmintonclick.com.au%2Fproducts%2Fli-ning-blade-x-700-78-grams-ladies-performance-badminton-racquet&docid=Zqbwr0Puw_QXEM&tbnid=jkpir2OjOGO2JM&vet=12ahUKEwiRmoXw9uSJAxW73zgGHduzMiYQM3oECE4QAA..i&w=820&h=820&hcb=2&ved=2ahUKEwiRmoXw9uSJAxW73zgGHduzMiYQM3oECE4QAA',
      buttonText: 'Add to cart'
    },
    // ... data produk lainnya
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterByPrice = (price) => {
    const filtered = products.filter(product => product.price <= price);
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <button onClick={() => handleFilterByPrice(150)}>Filter Produk di Bawah Rp150.000</button>
      <div className="product-list">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ProductList />);x    