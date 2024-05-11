export const addToFavorites = (book, favorites, setFavorites) => {
    // fetch ISBN to see if the book has been saved to favorites
    fetch(`http://localhost:3001/favorites`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        }
    )
    .then(res => res.json())
    .then(() => {
        setFavorites([...favorites, book]);
    })
    .catch(e => console.log(e))
}

export const removeFromFavorites = (isbn, favorites, setFavorites) => {
    // fetch ISBN to see if the book has been saved to favorites
    fetch(`http://localhost:3001/favorites/${isbn}`,
        {
            method: 'DELETE',
        }
    )
    .then(res => res.json())
    .then(() => {
        setFavorites(favorites.filter(f => f.isbn[0] !== isbn));
    })
    .catch(e => console.log(e))
}