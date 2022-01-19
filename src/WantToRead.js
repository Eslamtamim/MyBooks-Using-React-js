import React from "react";
import Book from "./book";
const WantToRead = (props) => {
  const { books, updateshelf } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want to Read</h2>

      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((e) => {
            return (
              <li key={e.id}>
                {" "}
                <Book e={e} updateshelf={updateshelf} />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
export default WantToRead;
