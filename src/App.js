import React from "react";
import { Component } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";
import CurrentlyReading from "./CurrentlyReading";
import WantToRead from "./WantToRead";
import Read from "./Read";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route } from "react-router-dom";
import Searchpage from "./searchpage";

class BooksApp extends Component {
  state = {
    books: [],
  };
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  }

  updateshelf = (book, shelf) => {
    this.state.books.map((e) => {
      return e.id !== book.id ? (book.shelf = shelf) : "";
    });
    this.forceUpdate();
    BooksAPI.update(book, shelf);
  };

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <CurrentlyReading
                    books={books.filter((e) => {
                      return e.shelf === "currentlyReading";
                    })}
                    updateshelf={this.updateshelf}
                  />
                  <WantToRead
                    books={books.filter((e) => {
                      return e.shelf === "wantToRead";
                    })}
                    updateshelf={this.updateshelf}
                  />
                  <Read
                    books={books.filter((e) => {
                      return e.shelf === "read";
                    })}
                    updateshelf={this.updateshelf}
                  />
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">
                  <button>Add a book</button>
                </Link>
              </div>
            </div>
          )}
        />
        <Route
          path="/search"
          render={() => (
            <Searchpage books={books} updateshelf={this.updateshelf} />
          )}
        />
      </div>
    );
  }
}
export default BooksApp;
