import React from "react";
import Selectbtn from "./Selectbtn";

const Book = (props) => {
  const { e, updateshelf, forceUpdate } = props;
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage:
              e.imageLinks && e.imageLinks.thumbnail
                ? `url(${e.imageLinks.thumbnail})`
                : "none",
          }}
        ></div>
        <div className="book-shelf-changer">
          <Selectbtn
            book={e}
            updateshelf={updateshelf}
            forceUpdate={forceUpdate}
          />
        </div>
      </div>
      <div className="book-title">{e.title}</div>
      <div className="book-authors">
        {e.authors && e.authors.length > 1 ? e.authors.join(" ") : e.authors}
      </div>
    </div>
  );
};
export default Book;
