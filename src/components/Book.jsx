import { useEffect, useState } from "react";

import BookCover from "../assets/book-cover.png";

const Book = ({ book, favorites, handleAddRemoveFavorite }) => {
    const [image, setImage] = useState(BookCover);
    const [btnClass, setBtnClass] = useState("bg-slate-800 text-white");
    const [btnText, setBtnText] = useState("Add to Favorites");

    useEffect(() => {
        let img = new Image();
        img.src = `https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`;

        img.addEventListener('load', function() {
            if (img.width > 1 && img.width > 1) {
                setImage(img.src);
            }
        });
    }, []);

    useEffect(() => {
        let exists = false;

        favorites.forEach(favorite => {
            if(book.isbn[0] === favorite.isbn[0]){
                exists = true;
            }
        });
        
        if (exists) {
            setBtnClass("text-slate-800 bg-white");
            setBtnText("Remove from Favorites");
        } else {
            setBtnClass("bg-slate-800 text-white");
            setBtnText("Add to Favorites");
        }
    }, [favorites]);

    return (
        <div className="flex border-2 flex-col gap-3">
            <div className="w-full aspect-[3/4.5]">
                <img className="h-full" src={image} alt="" />
            </div>
            
            <div className="p-3">
                <p className="font-bold">{book.title}</p>
                <p>{book.first_sentence}</p>
                <hr />
                <p className="flex justify-end">
                    <button className={`${btnClass} p-3 rounded-xl mt-4`} type="button" onClick={() => handleAddRemoveFavorite(book.isbn[0])}><i className="fa fa-heart"></i> {btnText}</button>
                </p>
            </div>
        </div>
    );
};

export default Book;