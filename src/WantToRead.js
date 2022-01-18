import React from "react";
import Selectbtn from "./Selectbtn";


const WantToRead = (props) =>{
  const {Books, WantToReadbooks} = props
    return(
<div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>


                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {WantToReadbooks.map(e=>{
                        return (<li key={e.id}>
                          <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${e.imageLinks.smallThumbnail})`  }}></div>
                              <div className="book-shelf-changer">
                              <Selectbtn/>
                              </div>
                            </div>
                            <div className="book-title">{e.title}</div>
                            <div className="book-authors">{e.authors.join(", ")}</div>
                          </div>
                        </li> )
                      })}
                    </ol>
                    

                  </div>





                      
                </div>



    )
}
export default WantToRead;
/* <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api")' }}></div>
                            <div className="book-shelf-changer">
                            <Selectbtn/>
                            </div>
                          </div>
                          <div className="book-title">Harry Potter and the Sorcerer's Stone</div>
                          <div className="book-authors">J.K. Rowling</div>
                        </div>
                      </li>
                    </ol>
                  </div> */