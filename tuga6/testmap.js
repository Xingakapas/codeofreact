// Misal kita ingin menambahkan properti baru 'isPopular' ke setiap produk
const products = [
    // ... data produk
  ];
  
  const updatedProducts = products.map(product => ({
    ...product,
    isPopular: product.price > 150
  }));