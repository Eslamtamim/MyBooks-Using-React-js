import React from "react";
import BooksApp from "./App";

const Selectbtn = (props) => {
  const {book, updateshelf,} = props
  return (
    <div>
                              <select defaultValue={book.shelf} onChange={(option) => updateshelf(book, option.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
  );
};
export default Selectbtn ;
// onClick={updateshelf(book.id , "currentlyReading")}
// onClick={props.updateshelf(props.book,"currentlyReading")}