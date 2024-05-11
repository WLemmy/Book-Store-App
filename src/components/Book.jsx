import { useEffect, useState } from "react"

import BookCover from "../assets/book-cover.png";

const Book = ({book}) => {
    const [image, setImage] = useState(BookCover);

    useEffect(() => {
        // Create an image element
        let img = new Image();

        // Set the source of the image
        img.src = `https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`;

        // Add an event listener to wait for the image to load
        img.addEventListener('load', function() {
            // Once the image is loaded, get its width and height
            if(img.width > 1 && img.width > 1){
                // set the url
                setImage(img.src);
            }
        });
    }, []);

  return (
    <div className="flex border-2 flex-col gap-3">
        <img className="w-full" src={image} alt="" />
        <div className="p-3">
            <p className="font-bold">{book.title}</p>
        </div>
        
    </div>
  )
}

export default Book