import React, { useState, useEffect } from 'react';

export default function BookCard() {
  const [Books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.itbook.store/1.0/search/mongodb');
        if (response.ok) {
          const data = await response.json();
          setBooks(data.books); // Assuming the data structure has a "books" property
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="book-card">
      <h1>Books about MongoDB</h1>
      {Books.length === 0 ? (
        <p>Loading...</p>
      ) : (
        Books.map((book) => (
          <div key={book.isbn13} className="book">
            <h2>{book.title}</h2>
            <p>{book.subtitle}</p>
            <img src={book.image} alt={book.title} />
            <p>ISBN: {book.isbn13}</p>
            <p>Price: {book.price}</p>
          </div>
        ))
      )}
    </div>
  );
}