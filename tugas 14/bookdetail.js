import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
        setBook(response.data.items[0]);
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    };
    fetchBook();
  }, [id]);

  return (
    <div>
      {book ? (
        <div>
          <h2>{book.volumeInfo.title}</h2>
          <p>Penulis: {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Tidak diketahui'}</p>
          <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
          <p>{book.volumeInfo.description || 'Tidak ada deskripsi untuk buku ini.'}</p>
        </div>
      ) : (
        <p>Buku tidak ditemukan.</p>
      )}  
    </div>
  );
}

export default BookDetail;
 
