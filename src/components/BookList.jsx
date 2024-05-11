import { Book, Loading } from './';

const BookList = ({books}) => {
  return (
    <>
        {
            books.length !== 0 ?
                <div className="grid grid-cols-6 gap-5">
                    {books && books.map(book => book.isbn ? <Book key = {book.isbn[0]} book={book} /> : "")}
                </div>
            : 
            
            <div className="text-center"><Loading /></div>
        }
    </>
    
  )
}

export default BookList;