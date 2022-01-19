import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as BooksAPI from "./BooksAPI";
import Book from "./book";
const Searchpage = (props) => {
  const { books, updateshelf } = props;
  const [query, setquery] = useState("");
  const [allbooks, setallbooks] = useState([]);

  const updateQuery = (query) => {
    BooksAPI.search(query).then((searchResults) => {
      if (searchResults && searchResults.length > 0) {
        for (let i = 0; i < searchResults.length; i++) {
          for (let j = 0; j < books.length; j++) {
            if (searchResults[i].id === books[j].id) {
              searchResults[i].shelf =
                books[
                  books.findIndex((book) => book.id === searchResults[i].id)
                ].shelf;
            }
          }
        }
      }

      setallbooks(searchResults);
    });
    setquery(query);
  };

  console.log(allbooks);
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>

        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>

      <div className="search-books-results">
        <ol className="books-grid">
          {allbooks &&
            allbooks.length > 0 &&
            allbooks.map((e) => {
              return (
                <li key={e.id}>
                  <Book e={e} updateshelf={updateshelf} />{" "}
                </li>
              );
            })}
        </ol>
      </div>
    </div>
  );
};

export default Searchpage;
