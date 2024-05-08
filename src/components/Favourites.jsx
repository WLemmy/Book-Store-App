import React, { useState } from 'react';
import BookCard from './BookCard';

export default function Favorites() {

  

  return (
    <div>
      <h1>My Bookstore</h1>
      <BookCard favorites={favorites} addToFavorites={addToFavorites} />
    </div>
  );
}