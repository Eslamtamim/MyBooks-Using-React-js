import React from "react";
import Selectbtn from "./Selectbtn";

const Book = (props)=>{
    const {e,updateshelf,forceUpdate}= props
    return(
        <li key={e.id}>
                          <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${e.imageLinks.smallThumbnail})`  }}></div>
                              <div className="book-shelf-changer">  
                              <Selectbtn book={e} updateshelf={updateshelf} forceUpdate = {forceUpdate}/>
                            </div>
                            </div>
                            <div className="book-title">{e.title}</div>
                            <div className="book-authors">{e.authors.join(", ")}</div>
                          </div>
                        </li>
    )

}
export default Book;
