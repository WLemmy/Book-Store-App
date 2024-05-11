import { useEffect, useRef, useState } from "react";

import { PageHeading, BookList, Navbar, Search } from "../components";


const AllBooks = () => {
    const [query, setQuery] = useState('JavaScript');
    const [books, setBooks] = useState([]);
    const searchButtonRef = useRef();

    useEffect(() => {
        setBooks([]);

        searchButtonRef.current.disabled = true;
        
        if(query !== ""){
            fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`)
            .then(res => res.json())
            .then(res => {
                setBooks(res.docs);
            })
            .catch(e => console.log(e))
            .finally(() => {
                searchButtonRef.current.disabled = false;
            });
        }
    }, [query]);

  return (
    <>
        <Navbar />

        <div className="container mx-auto max-w-7xl">
            <PageHeading text = "All Books" />

            <Search className = "my-4" searchButtonRef={searchButtonRef} setQuery={setQuery} />

            <BookList books={books} />
        </div>
    </>
  )
}

export default AllBooks