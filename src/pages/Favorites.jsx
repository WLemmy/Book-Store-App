import { useState, useEffect } from "react";

import { PageHeading, Navbar, BookList } from "../components";

import { removeFromFavorites } from "../helpers/functions";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleAddRemoveFavorite = isbn => {
        removeFromFavorites(isbn, favorites, setFavorites);
    }

    useEffect(() => {
        setLoading(false);
        
        // fetch favorites
        fetch(`http://localhost:3001/favorites`)
        .then(res => res.json())
        .then(res => {
            setFavorites(res);
        })
        .catch(e => console.log(e))
        .finally(() => setLoading(false));
    }, []);
  return (
    <>
        <Navbar />

        <div className="container mx-auto max-w-7xl">
            <PageHeading text = "Favorites" />

            <BookList books={favorites} favorites = {favorites} handleAddRemoveFavorite = { handleAddRemoveFavorite } loading={loading} />

            <p></p>
        </div>
    </>
  )
}

export default Favorites