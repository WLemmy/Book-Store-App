import React, { useState, useEffect } from 'react';

export default function BookCard() {
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.itbook.store/1.0/search/mongodb');
        if (response.ok) {
          const data = await response.json();
          setBooks(data.books);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchData();
  }, []);

  const addToFavorites = (isbn) => {
    const updatedFavorites = new Set(favorites);
    updatedFavorites.add(isbn);
    setFavorites(updatedFavorites);
    console.log(updatedFavorites);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="book-card">
      <h1>Books about MongoDB</h1>
      <input
        type="text"
        placeholder="Search by title..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {filteredBooks.length === 0 ? (
        <p>No books found.</p>
      ) : (
        filteredBooks.map((book) => (
          <div key={book.isbn13} className="book">
            <h2>{book.title}</h2>
            <p>{book.subtitle}</p>
            <img src={book.image} alt={book.title} />
            <p>ISBN: {book.isbn13}</p>
            <p>Price: {book.price}</p>
            <button onClick={() => addToFavorites(book.isbn13)}>Add to Favorites</button>
          </div>
        ))
      )}
    </div>
  );
}
