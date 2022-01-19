import React from "react";

const Selectbtn = (props) => {
  const { book, updateshelf } = props;
  return (
    <div>
      <select
        defaultValue={book.shelf}
        onChange={(option) => updateshelf(book, option.target.value)}
      >
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};
export default Selectbtn;
