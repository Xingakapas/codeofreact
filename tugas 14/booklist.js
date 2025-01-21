import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=react');
        setBooks(response.data.items);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Daftar Buku React</h1>
      <ul>
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
}

export default BookList;
//script ini akan memimta api ke gugel//