import { Book, Loading } from './';

const BookList = ({books, favorites, handleAddRemoveFavorite, loading}) => {
  return (
    <>
        {
            !loading ?
                <div className="grid grid-cols-4 gap-5">
                    {books && books.map(book => book.isbn ? <Book handleAddRemoveFavorite = { handleAddRemoveFavorite } key = {book.isbn[0]} book={book} favorites = {favorites} /> : "")}
                </div>
            : 
            
            <div className="text-center"><Loading /></div>
        }
    </>
    
  )
}

export default BookList;