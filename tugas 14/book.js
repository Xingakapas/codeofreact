import React from 'react';
import { Link } from 'react-router-dom';

function Book({ book }) {
  return (
    <li>
      <h3>{book.volumeInfo.title}</h3>
      <p>Penulis: {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Tidak diketahui'}</p>
      <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
      <Link to={`/books/${book.id}`}>Lihat Detail</Link>
    </li>
  );
}

export default Book; 