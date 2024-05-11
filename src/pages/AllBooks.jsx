import { useEffect, useRef, useState } from "react";

import { PageHeading, BookList, Navbar, Search } from "../components";

import { addToFavorites, removeFromFavorites } from "../helpers/functions";


const AllBooks = () => {
    const [query, setQuery] = useState('JavaScript');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [favorites, setFavorites] = useState([]);
    const searchButtonRef = useRef();

    // function to add to or remove from favorites
    const handleAddRemoveFavorite = isbn => {
        let exists = false;

        favorites.forEach(f => {
            if(f.isbn[0] === isbn){
                exists = true;
            }
        });

        if(exists){
            // remove from db and then from state
            removeFromFavorites(isbn, favorites, setFavorites)

        }

        else{
            // add to db and then state
            let book;
            books.forEach(b => {
                if(b.isbn[0] === isbn){
                    book = b;
                }
            });

            addToFavorites(book, favorites, setFavorites);
        }
    }

    useEffect(() => {
        // fetch favorites
        fetch(`http://localhost:3001/favorites`)
        .then(res => res.json())
        .then(res => {
            setFavorites(res);
        })
        .catch(e => console.log(e));

        // fetch books
        setBooks([]);

        setLoading(true);
        
        if(query !== ""){
            fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`)
            .then(res => res.json())
            .then(res => {
                // filter results without isbn
                let filtered = [];

                res.docs.forEach(b => {
                    if(b.isbn[0] !== undefined){
                        filtered.push(b);
                    }
                });

                filtered =filtered.map(b => ({
                    ...b,
                    id: b.isbn[0]
                }));
                
                setBooks(filtered);
            })
            .catch(e => console.log(e))
            .finally(() => {
                setLoading(false);
            });
        }
    }, [query]);

  return (
    <>
        <Navbar />

        <div className="container mx-auto max-w-7xl">
            <PageHeading text = "All Books" />

            <Search className = "my-4" searchButtonRef={searchButtonRef} setQuery={setQuery} />

            <BookList books={books} favorites = {favorites} handleAddRemoveFavorite = { handleAddRemoveFavorite } loading={loading} />
        </div>
    </>
  )
}

export default AllBooks