// const quantityButtons = document.querySelectorAll('.quantity button');

// quantityButtons.forEach(button => {
//   button.addEventListener('click', (e) => {
//     const countElement = e.target.parentElement.querySelector('.count');
//     const count = parseInt(countElement.textContent);

//     if (e.target.classList.contains('increase')) {
//       countElement.textContent = count + 1;
//     } else if (e.target.classList.contains('decrease') && count > 0) {
//       countElement.textContent = count - 1;
//     }

   
//   });
// });

// import React, { useState } from 'react';

// function Card({ name, price, image }) {
//   const [quantity, setQuantity] = useState(0);

//   return (
//     <div className="card">
//       <img src={image} alt={name} />
//       <h2>{name}</h2>
//       <p>Rp {30.000}</p>

//       <div className="quantity-controls">
//         <button onClick={() => {
//           if (quantity > 0) {
//             setQuantity(quantity - 1);
//           }
//         }}>-</button>
//         <span>{quantity}</span>
//         <button onClick={() => setQuantity(quantity + 1)}>+</button>
//       </div>

//       <p>Total: Rp {quantity * 30.000}</p>
//     </div>
//   );
// }

// export default Card;

// Mendapatkan semua elemen yang dibutuhkan
// const quantityButtons = document.querySelectorAll('.quantity button');
// const countElements = document.querySelectorAll('.count');
// const totalElements = document.querySelectorAll('.total');
// const totalList = document.querySelector('.total-list');
// const grandTotalElement = document.querySelector('.grand-total');

// // Fungsi untuk menghitung total harga dan memperbarui tampilan
// function updateTotal() {
//   // ... logika untuk menghitung total harga dan memperbarui elemen HTML ...
// }

// // Event listener untuk tombol tambah dan kurang
// quantityButtons.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     const count = parseInt(countElements[index].textContent);
//     const price = parseInt(totalElements[index].textContent.split(' ')[1]); // Ambil harga dari elemen total

//     if (button.classList.contains('increase')) {
//       countElements[index].textContent = count + 1;
//     } else if (button.classList.contains('decrease') && count > 0) {
//       countElements[index].textContent = count - 1;
//     }

//     // Perbarui total harga untuk produk tersebut
//     totalElements[index].textContent = `Total: Rp ${count * price}`;

//     // Panggil fungsi updateTotal untuk menghitung dan menampilkan total keseluruhan
//     updateTotal();
//   });
// });

// // Fungsi updateTotal (implementasi lengkap)
// function updateTotal() {
//   let grandTotal = 0;
//   totalList.innerHTML = ''; // Kosongkan daftar rincian

//   countElements.forEach((countElement, index) => {
//     const count = parseInt(countElement.textContent);
//     const price = parseInt(totalElements[index].textContent.split(' ')[1]);
//     const itemTotal = count * price;

//     const listItem = document.createElement('li');
//     listItem.textContent = `Produk ${index + 1} x ${count} = Rp ${itemTotal}`;
//     totalList.appendChild(listItem);

//     grandTotal += itemTotal;
//   });

//   grandTotalElement.textContent = `Total Keseluruhan: Rp ${grandTotal}`;
// }

// // Panggil fungsi updateTotal pertama kali untuk menginisialisasi tampilan
// updateTotal();

import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Produk A', price: 20.000 },
  { id: 2, name: 'Produk B', price: 30.000 },
  { id: 3, name: 'Produk C', price: 50.000 },
];

const Card = ({ product, updateTotal }) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity(quantity + 1);
    updateTotal(product.price);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      updateTotal(-product.price);
    }
  };

  return (
    <div className="border rounded-lg shadow-lg p-4 w-64 m-4 bg-white">
      <img
        src={"https://via.placeholder.com/300x200"}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600">Harga: Rp {product.price.toLocaleString('id-ID')}</p>
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={decrement}
          className="bg-blue
          -500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Kurang
        </button>
        <span className="text-xl font-bold">{quantity}</span>
        <button
          onClick={increment}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Tambah
        </button>
      </div>
      <p className="text-gray-800 mt-4">Total: Rp {(quantity * product.price).toLocaleString('id-ID')}</p>
    </div>
  );
};

const Card2= () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const updateTotal = (amount) => {
    setTotalPrice((prevTotal) => prevTotal + amount);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Rincian Harga Produk</h1>
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <Card key={product.id} product={product} updateTotal={updateTotal} />
        ))}
      </div>
      <h2 className="text-xl font-bold mt-8">Total Harga: Rp {totalPrice.toLocaleString('id-ID')}</h2>
    </div>
  );
};

export default Card2;  