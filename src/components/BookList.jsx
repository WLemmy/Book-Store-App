import React from 'react';
import { Book } from './';

export const BookList = ({books}) => {
  return (
    <div>
      {books && books.map(book => <Book books={book} />)}
    </div>
  )
}
export default BookList;
